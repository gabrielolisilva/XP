import axios from "axios";
import * as _ from "lodash";

export async function getDespesas(date: string | null) {
  if (date) {
    const { data } = await axios.get(
      `http://localhost:3500/despesas?mes=${date}&_sort=dia`
    );
    return data;
  } else {
    const { data } = await axios.get(`http://localhost:3500/despesas`);
    const filteredData = _.orderBy(data, ["mes", "dia"], ["asc", "asc"]);
    return filteredData;
  }
}
