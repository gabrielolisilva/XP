import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { IHeaderProps } from "../interfaces/interfaces";

import * as _ from "lodash";

const HeaderComponent = (props: IHeaderProps) => {
  const { allDespesas, currentDespesas } = props;
  const months = allDespesas.map((item) => {
    return item.mes.slice(0, 4);
  });
  const uniqueMonths = months.filter((item, index) => {
    return months.indexOf(item) === index;
  });
  const days = allDespesas.map((item) => {
    return item.mes.slice(5, 7);
  });
  const uniqueDays = days
    .filter((item, index) => {
      return days.indexOf(item) === index;
    })
    .map((item) => {
      return parseInt(item, 10);
    })
    .sort((a, b) => {
      return a - b;
    });

  let counterTotal = 0;

  currentDespesas.map((item) => {
    return (counterTotal += item.valor);
  });

  return (
    <>
      <Box>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="selectYear">Ano</InputLabel>
          <Select value="" labelId="selectYear">
            {uniqueMonths.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="selectYear">Mês</InputLabel>
          <Select value="" labelId="selectMonth">
            {uniqueDays.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box>
        <h4>Total counter: {counterTotal.toFixed(2)}</h4>
      </Box>
    </>
  );
};

export default HeaderComponent;
