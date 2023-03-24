import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import {
  Avatar,
  Checkbox,
  FormControlLabel,
  Icon,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getEventsEndPoint, IEvent } from "../backend/backend";

const daysWeek: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

interface ICalendarCell {
  date: string;
  dayOfMonth: number;
  events: IEvent[];
}

function generateCalendar(
  date: string,
  allEvents: IEvent[]
): ICalendarCell[][] {
  const weeks: ICalendarCell[][] = []; //[] week [] week day
  const jsDate = new Date(`${date}T12:00:00`);
  const currentMonth = jsDate.getMonth();

  const currentDay = new Date(jsDate.valueOf()); //copying jsDate into this new variable
  currentDay.setDate(1); //getting first day of month

  const dayOfWeek = currentDay.getDay(); //getting with day of week it is (0 is sunday)
  currentDay.setDate(1 - dayOfWeek); //if day of week is 0 it keeps being sunday, but if it's not he will subtract until find with day is sunday

  do {
    const week: ICalendarCell[] = [];
    for (let i = 0; i < daysWeek.length; i++) {
      const isoDate = `${currentDay.getFullYear()}-${(currentDay.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${currentDay.getDate().toString().padStart(2, "0")}`;
      week.push({
        date: isoDate,
        dayOfMonth: currentDay.getDate(),
        events: allEvents.filter((events) => events.date === isoDate),
      });
      currentDay.setDate(currentDay.getDate() + 1);
    }
    weeks.push(week);
  } while (currentDay.getMonth() === currentMonth);

  return weeks;
}

function getTodayDate() {
  return "2021-06-17";
}

const CalendarScreen = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const weeks = generateCalendar(getTodayDate(), events);
  const firstDate = weeks[0][0].date;
  const lastDate = weeks[weeks.length - 1][6].date; //last day of week is 6 - 0 is sunday

  useEffect(() => {
    getEventsEndPoint(firstDate, lastDate).then((resp) => setEvents(resp));
  }, [firstDate, lastDate]);

  return (
    <Box display="flex" height="100%" alignItems="stretch">
      <Box
        borderRight="1px solid rgb(224, 224, 244)"
        width="12em"
        padding="8px 16px"
      >
        <h2>Agenda React</h2>
        <Button variant="contained">Novo Evento</Button>

        <Box marginTop="64px">
          <h3>Agendas</h3>
          <FormControlLabel control={<Checkbox />} label="Pessoal" />
          <FormControlLabel control={<Checkbox />} label="Trabalho" />
        </Box>
      </Box>
      <TableContainer component={"div"}>
        <Box padding="8px 16px" display="flex" alignItems="center">
          <Box>
            <IconButton aria-label="Mês anterior">
              <Icon>chevron_left</Icon>
            </IconButton>
            <IconButton aria-label="Próximo mês">
              <Icon>chevron_right</Icon>
            </IconButton>
          </Box>

          <Box flex="1" marginLeft="16px" component="strong">
            Junho de 2021
          </Box>

          <IconButton aria-label="Ícone profile">
            <Avatar>
              <Icon>person</Icon>
            </Avatar>
          </IconButton>
        </Box>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {daysWeek.map((day) => (
                <TableCell align="center" key={day}>
                  {day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {weeks.map((week, i) => (
              <TableRow key={i}>
                {week.map((cell) => (
                  <TableCell align="center" key={cell.date}>
                    <div className="dayOfMonth">{cell.dayOfMonth}</div>

                    {cell.events.map((event) => (
                      <button className="eventButton" key={event.id}>
                        {event.time && (
                          <span>
                            <Icon>watch_later</Icon> {event.time}
                          </span>
                        )}
                        {event.desc}
                      </button>
                    ))}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CalendarScreen;
