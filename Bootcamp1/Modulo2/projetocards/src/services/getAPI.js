import axios from "axios";

export default async function getData(url) {
  const response = await axios.get(url);
  return response.data;
}
