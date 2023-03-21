import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3500",
  timeout: 5000,
});

export async function exclude(url) {
  await axiosInstance.delete(url);
}

export async function create(url, object) {
  const { data } = await axiosInstance.post(url, object);
  return data;
}

export async function edit(url, object) {
  const { data } = await axiosInstance.put(url, object);
  return data;
}
