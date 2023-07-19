import express from "express";
import cors from "cors";
import clientesRouter from "./routes/clientes.route.js";
import livrosRouter from "./routes/livros.route.js";
import vendasRouter from "./routes/vendas.route.js";
import autoresRouter from "./routes/autores.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/venda", vendasRouter);
app.use("/cliente", clientesRouter);
app.use("/livro", livrosRouter);
app.use("/autor", autoresRouter);

app.listen(3000, () => {
  console.log(`API RUNNING PORT 3000`);
});
