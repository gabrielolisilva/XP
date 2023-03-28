import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { getDespesas } from "../services/getData";
import HeaderComponent from "../components/HeaderComponent";
import TableComponent from "../components/TableComponent";
import { GetURLParams } from "../services/getURLParams";
import { IDespesas } from "../interfaces/interfaces";

const DespesasPage = () => {
  let date = GetURLParams("mes");
  if (date === "") date = "2020-06";

  const [allDespesas, setAllDespesas] = useState<IDespesas[]>([]);
  const [currentDespesas, setCurrentDespesas] = useState<IDespesas[]>([]);

  useEffect(() => {
    async function despesasInfo() {
      const despesasData = await getDespesas(date);
      setCurrentDespesas(despesasData);

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
      <Box height="20vh">
        <HeaderComponent allDespesas={allDespesas} />
      </Box>
      <Box flex="1">
        <TableComponent />
      </Box>
    </Box>
  );
};

export default DespesasPage;
