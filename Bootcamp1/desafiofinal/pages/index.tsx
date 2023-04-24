import Head from "next/head";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dataOrganization from "@/helpers/helpers";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTableInfo, setCurrentTableInfo] = useState<any>([]);
  const [year, setYear] = useState("2003");
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };

  const YEARS = [
    2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015,
  ];

  useEffect(() => {
    console.log(year);

    async function getData() {
      const data = await fetch(`http://localhost:3500/${year}`).then((resp) =>
        resp.json()
      );
      /* console.log(data); */
      const dataOrganized = dataOrganization(data);
      setCurrentTableInfo(dataOrganized);
      setIsLoading(false);
      console.log(currentTableInfo);
    }
    getData();
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
              {YEARS.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </header>

      <main className="px-20 mt-10">
        {isLoading ? (
          <div className="text-center text-2xl">Carregando...</div>
        ) : (
          <TableContainer component={Paper} style={{ marginBottom: 50 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
              <TableBody>
                {currentTableInfo.map((team: any) => (
                  <TableRow key={team.time}>
                    <TableCell component="th" scope="row">
                      {team.time}
                    </TableCell>
                    <TableCell align="center">{team.pontos}</TableCell>
                    <TableCell align="center">{team.vitórias}</TableCell>
                    <TableCell align="center">{team.empates}</TableCell>
                    <TableCell align="center">{team.derrotas}</TableCell>
                    <TableCell align="center">{team.gols_Pros}</TableCell>
                    <TableCell align="center">{team.gols_Contra}</TableCell>
                    <TableCell align="center">{team.saldo_Gols}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </main>
    </div>
  );
}
