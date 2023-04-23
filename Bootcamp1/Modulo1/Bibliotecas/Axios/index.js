import axios from "axios";

const res = await axios.get("https://jsonplaceholder.typicode.com/users");

console.log(res);
