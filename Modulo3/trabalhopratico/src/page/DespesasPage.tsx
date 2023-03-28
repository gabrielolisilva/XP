import Box from "@mui/material/Box";
import { useEffect } from "react";
import { getDespesas } from "../services/getData";
import HeaderComponent from "../components/HeaderComponent";
import TableComponent from "../components/TableComponent";
import { GetURLParams } from "../services/getURLParams";

const DespesasPage = () => {
  let date = GetURLParams("mes");
  if (date === "") date = "2020-06";

  useEffect(() => {
    async function despesasInfo() {
      const despesasData = await getDespesas(date);
      console.log(despesasData);
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
        <HeaderComponent />
      </Box>
      <Box flex="1">
        <TableComponent />
      </Box>
    </Box>
  );
};

export default DespesasPage;
