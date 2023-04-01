import axios from "axios";
import * as _ from "lodash";

export async function getDespesas(date: string) {
  const { data } = await axios.get(
    `http://localhost:3500/despesas?mes=${date}&_sort=dia`
  );
  return data;
}
