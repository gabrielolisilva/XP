import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/vendas", vendasRouter);
app.use("/clientes", clientesRouter);
app.use("/livros", livrosRouter);
app.use("/autores", autoresRouter);

app.listen(3000, () => {
  console.log(`API RUNNING PORT 3000`);
});
