import { format } from "date-fns";

const today = new Date();
const formatedData = format(today, "dd.MM.yyyy");

console.log(formatedData);
