import Head from "next/head";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Home() {
  const [currentTableInfo, setCurrentTableInfo] = useState([]);
  const [year, setYear] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };

  const YEARS = [
    2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015,
  ];

  useEffect(() => {
    console.log(year);
  }, [year]);

  return (
    <div>
      <Head>
        <title>Campeonatos</title>
      </Head>

      <header>
        <div className="bg-gray-500">
          <h1 className="py-6 text-center text-2xl">Tabela do Campeonato</h1>
        </div>

        <Box marginX={"auto"} marginTop={5} width={400} textAlign={"center"}>
          <FormControl style={{ width: 100 }}>
            <InputLabel id="demo-simple-select-label">Ano</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="Ano"
              onChange={handleChange}
            >
              <MenuItem value={0}>...</MenuItem>
              {YEARS.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </header>

      <main className="px-28 mt-10">
        <TableContainer component={Paper}>
          <Table style={{ width: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center">P</TableCell>
                <TableCell align="center">V</TableCell>
                <TableCell align="center">E</TableCell>
                <TableCell align="center">D</TableCell>
                <TableCell align="center">GP</TableCell>
                <TableCell align="center">GC</TableCell>
                <TableCell align="center">S</TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </main>
    </div>
  );
}
