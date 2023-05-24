import express from "express";
import router from "./routes/routes.js";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/pedidos", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
