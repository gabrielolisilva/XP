import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ITableProps } from "../interfaces/interfaces";
import * as _ from "lodash";

const TableResume = (props: ITableProps) => {
  const { currentDespesas } = props;
  const categoriesGrouped = _.groupBy(currentDespesas, "categoria");
  const categoriesCount = _.sortBy(
    Object.keys(categoriesGrouped).map((categoryName) => {
      return {
        categoria: categoryName,
        total: _.sumBy(categoriesGrouped[categoryName], "valor").toFixed(2),
      };
    }),
    "categoria"
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Valor(R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoriesCount.map((item) => {
            return (
              <TableRow
                key={item.categoria}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.categoria}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  {item.total}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableResume;
