import express from "express";
import cors from "cors";
import proprietariosRouter from "./routes/proprietarios.route.js";
import animaisRouter from "./routes/animais.route.js";
import servicosRouter from "./routes/servicos.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/proprietario", proprietariosRouter);
app.use("/animal", animaisRouter);
app.use("/servico", servicosRouter);

app.listen(3000, () => {
  console.log(`API RUNNING PORT 3000`);
});
