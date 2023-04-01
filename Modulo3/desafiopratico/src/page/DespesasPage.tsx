import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { getDespesas } from "../services/getData";
import HeaderComponent from "../components/HeaderComponent";
import TableComponent from "../components/TableComponent";
import { IDespesas } from "../interfaces/interfaces";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DespesasPage = () => {
  const { anoMes } = useParams();

  const navigate = useNavigate();

  const [currentDespesas, setCurrentDespesas] = useState<IDespesas[]>([]);

  useEffect(() => {
    async function despesasInfo() {
      const despesasData = await getDespesas(anoMes!);
      setCurrentDespesas(despesasData);
    }

    despesasInfo();
  }, [anoMes]);

  function handleDateUpdate(date: string): void {
    navigate("/despesas/" + date);
  }

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
          currentDespesas={currentDespesas}
          anoMes={anoMes!}
          handleDateUpdate={handleDateUpdate}
        />
      </Box>
      <Box flex="1">
        <TableComponent currentDespesas={currentDespesas} />
      </Box>
    </Box>
  );
};

export default DespesasPage;
