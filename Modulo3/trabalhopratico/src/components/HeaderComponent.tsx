import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { IHeaderProps } from "../interfaces/interfaces";

const HeaderComponent = (props: IHeaderProps) => {
  const {
    allDespesas,
    currentDespesas,
    yearInfo,
    monthInfo,
    setYearInfo,
    setMonthInfo,
  } = props;
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
          <Select
            value={yearInfo}
            labelId="selectYear"
            onChange={(e) => setYearInfo(e.target.value)}
          >
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
          <Select
            value={monthInfo}
            labelId="selectMonth"
            onChange={(e) => setMonthInfo(e.target.value)}
          >
            {uniqueDays.map((item) => {
              if (item < 10) {
                return (
                  <MenuItem key={`0${item}`} value={`0${item}`}>
                    {`0${item}`}
                  </MenuItem>
                );
              } else {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                );
              }
            })}
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
