import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ITableProps } from "../interfaces/interfaces";

const TableComponent = (props: ITableProps) => {
  const { currentDespesas } = props;

  function formataValor(n: number): string {
    return n.toFixed(2).replace(".", ",");
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Despesa</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Dia</TableCell>
            <TableCell>Valor(R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentDespesas.map((item) => {
            return (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.descricao}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.categoria}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.dia}
                </TableCell>
                <TableCell component="th" scope="row">
                  {formataValor(item.valor)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
