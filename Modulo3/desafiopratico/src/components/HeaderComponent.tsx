import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { IHeaderProps } from "../interfaces/interfaces";

const HeaderComponent = (props: IHeaderProps) => {
  const { currentDespesas, anoMes, handleDateUpdate } = props;
  const [ano, mes] = anoMes.split("-");

  let counterTotal = 0;

  currentDespesas.map((item) => {
    return (counterTotal += item.valor);
  });

  return (
    <>
      <Box>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="selectYear">Ano</InputLabel>
          <Select
            value={ano}
            labelId="selectYear"
            onChange={(e) => handleDateUpdate(`${e.target.value}-${mes}`)}
          >
            <MenuItem key="2020" value="2020">
              2020
            </MenuItem>
            <MenuItem key="2021" value="2021">
              2021
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="selectYear">Mês</InputLabel>
          <Select
            value={mes}
            labelId="selectMonth"
            onChange={(e) => handleDateUpdate(`${ano}-${e.target.value}`)}
          >
            <MenuItem key="Janeiro" value="01">
              Janeiro
            </MenuItem>
            <MenuItem key="Fevereiro" value="02">
              Fevereiro
            </MenuItem>
            <MenuItem key="Março" value="03">
              Março
            </MenuItem>
            <MenuItem key="Abril" value="04">
              Abril
            </MenuItem>
            <MenuItem key="Maio" value="05">
              Maio
            </MenuItem>
            <MenuItem key="Junho" value="06">
              Junho
            </MenuItem>
            <MenuItem key="Julho" value="07">
              Julho
            </MenuItem>
            <MenuItem key="Agosto" value="08">
              Agosto
            </MenuItem>
            <MenuItem key="Setembro" value="09">
              Setembro
            </MenuItem>
            <MenuItem key="Outubro" value="10">
              Outubro
            </MenuItem>
            <MenuItem key="Novembro" value="11">
              Novembro
            </MenuItem>
            <MenuItem key="Dezembro" value="12">
              Dezembro
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <h4>Total counter: R$ {counterTotal.toFixed(2)}</h4>
      </Box>
    </>
  );
};

export default HeaderComponent;
