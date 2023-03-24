import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel } from "@mui/material";

const daysWeek: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

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

        <h3>Agendas</h3>
        <FormControlLabel control={<Checkbox />} label="Pessoal" />
        <FormControlLabel control={<Checkbox />} label="Trabalho" />
      </Box>
      <TableContainer component={"div"}>
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
            <TableRow>
              {daysWeek.map((day) => (
                <TableCell align="center">X</TableCell>
              ))}
            </TableRow>

            <TableRow>
              {daysWeek.map((day) => (
                <TableCell align="center">X</TableCell>
              ))}
            </TableRow>

            <TableRow>
              {daysWeek.map((day) => (
                <TableCell align="center">X</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CalendarScreen;
