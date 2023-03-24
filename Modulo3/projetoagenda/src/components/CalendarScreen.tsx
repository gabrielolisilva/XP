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

const daysWeek: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

interface ICalendarCell {
  date: string;
}

function generateCalendar(date: string): ICalendarCell[][] {
  const weeks: ICalendarCell[][] = []; //an array with 4 array related to each week
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
      week.push({ date: isoDate });
      currentDay.setDate(currentDay.getDate() + 1);
    }
    weeks.push(week);
  } while (currentDay.getMonth() === currentMonth);

  return weeks;
}

function getTodayDate() {
  return "2021-06-17";
}

const weeks = generateCalendar(getTodayDate());

const CalendarScreen = () => {
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
                    {cell.date}
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
