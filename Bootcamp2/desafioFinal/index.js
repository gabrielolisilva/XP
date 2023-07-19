import express from "express";
import cors from "cors";
import clientesRouter from "./routes/clientes.route.js";
import livrosRouter from "./routes/livros.route.js";
import vendasRouter from "./routes/vendas.route.js";
import autoresRouter from "./routes/autores.route.js";
import Venda from "./models/vendas.model.js";
import Livro from "./models/livros.model.js";
import Autor from "./models/autores.model.js";
import Cliente from "./models/clientes.model.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/venda", vendasRouter);
app.use("/cliente", clientesRouter);
app.use("/livro", livrosRouter);
app.use("/autor", autoresRouter);

/* app.get("/venda", async (req, res) => {
  try {
    const autorId = req.query.autorId;

    // Realizar a consulta no banco de dados usando o Sequelize
    const vendasDoAutor = await Venda.findAll({
      where: {},
      include: [
        {
          model: Livro,
          where: { autorId: autorId },
          include: [
            {
              model: Autor,
            },
          ],
        },
      ],
    });

    // Retornar a lista de vendas do autor em formato JSON
    res.json(vendasDoAutor);
  } catch (error) {
    console.error("Erro ao consultar as vendas do autor:", error);
    res.status(500).json({ error: "Erro ao consultar as vendas do autor" });
  }
}); */

/* app.get("/venda", async (req, res) => {
  try {
    const clienteId = req.query.clienteId;

    // Realizar a consulta no banco de dados usando o Sequelize
    const vendasDoCliente = await Venda.findAll({
      where: {},
      include: [
        {
          model: Cliente,
          where: { clienteId: clienteId },
        },
      ],
    });

    // Retornar a lista de vendas do autor em formato JSON
    res.json(vendasDoCliente);
  } catch (error) {
    console.error("Erro ao consultar as vendas do autor:", error);
    res.status(500).json({ error: "Erro ao consultar as vendas do autor" });
  }
}); */

/* app.get("/venda", async (req, res) => {
  try {
    const livroId = req.query.livroId;

    // Realizar a consulta no banco de dados usando o Sequelize
    const vendasDoLivro = await Venda.findAll({
      where: {},
      include: [
        {
          model: Livro,
          where: { livroId: livroId },
        },
      ],
    });

    // Retornar a lista de vendas do autor em formato JSON
    res.json(vendasDoLivro);
  } catch (error) {
    console.error("Erro ao consultar as vendas do autor:", error);
    res.status(500).json({ error: "Erro ao consultar as vendas do autor" });
  }
}); */

app.listen(3000, () => {
  console.log(`API RUNNING PORT 3000`);
});
