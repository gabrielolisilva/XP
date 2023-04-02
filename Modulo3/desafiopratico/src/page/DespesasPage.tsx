import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { getDespesas } from "../services/getData";
import HeaderComponent from "../components/HeaderComponent";
import TableComponent from "../components/TableComponent";
import { IDespesas } from "../interfaces/interfaces";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TableResume from "../components/TableResume";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DespesasPage = () => {
  const [value, setValue] = useState(0);
  const [currentDespesas, setCurrentDespesas] = useState<IDespesas[]>([]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { anoMes } = useParams();
  const navigate = useNavigate();

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

      <Box sx={{ width: "100%", margin: "20px 0" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Resumo" {...a11yProps(0)} />
            <Tab label="Detalhes" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box flex="1">
            <TableResume currentDespesas={currentDespesas} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box flex="1">
            <TableComponent currentDespesas={currentDespesas} />
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default DespesasPage;
