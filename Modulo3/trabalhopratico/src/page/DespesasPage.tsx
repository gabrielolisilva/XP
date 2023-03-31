import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { getDespesas } from "../services/getData";
import HeaderComponent from "../components/HeaderComponent";
import TableComponent from "../components/TableComponent";
import { IDespesas } from "../interfaces/interfaces";

const DespesasPage = () => {
  const [allDespesas, setAllDespesas] = useState<IDespesas[]>([]);
  const [currentDespesas, setCurrentDespesas] = useState<IDespesas[]>([]);
  const [yearInfo, setYearInfo] = useState("2020");
  const [monthInfo, setMonthInfo] = useState("06");

  let date = `${yearInfo}-${monthInfo}`;

  useEffect(() => {
    async function despesasInfo() {
      const despesasData = await getDespesas(date);
      setCurrentDespesas(despesasData);
      console.log(currentDespesas);

      const allDespesasData = await getDespesas(null);
      setAllDespesas(allDespesasData);
    }

    despesasInfo();
  }, [date]);

  return (
    <Box
      padding="2px 40px"
      display="flex"
      flexDirection="column"
      className="despesasPageContainer"
      height="100vh"
    >
      <Box
        height="20vh"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <HeaderComponent
          allDespesas={allDespesas}
          currentDespesas={currentDespesas}
          yearInfo={yearInfo}
          setYearInfo={setYearInfo}
          monthInfo={monthInfo}
          setMonthInfo={setMonthInfo}
        />
      </Box>
      <Box flex="1" margin="20px 0px">
        <TableComponent currentDespesas={currentDespesas} />
      </Box>
    </Box>
  );
};

export default DespesasPage;
