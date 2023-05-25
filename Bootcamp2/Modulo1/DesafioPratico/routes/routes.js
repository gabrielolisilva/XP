import express from "express";
const router = express.Router();
import { promises as fs } from "fs";
import _ from "lodash";

router.post("/adicionar", async (req, res) => {
  try {
    const { cliente, produto, valor } = req.body;
    const data = await fs.readFile("./data/pedidos.json");
    const jsonData = JSON.parse(data);

    const newInfo = {
      id: jsonData.nextId,
      cliente,
      produto,
      valor,
      entregue: false,
      timestamp: new Date(),
    };

    jsonData.nextId++;
    jsonData.pedidos.push(newInfo);

    fs.writeFile("./data/pedidos.json", JSON.stringify(jsonData));
    res.send({ ...newInfo, msg: "Adicionado com sucesso!" });
  } catch (err) {
    res.send(400).send({ error: err.message });
  }
});

router.put("/editar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { cliente, produto, valor, entregue } = req.body;
    const data = await fs.readFile("./data/pedidos.json");
    const jsonData = JSON.parse(data);

    let i;
    jsonData.pedidos.map((item, index) => {
      if (item.id === parseInt(id)) {
        i = index;
      }
    });

    jsonData.pedidos[i] = {
      ...jsonData.pedidos[i],
      cliente,
      produto,
      valor,
      entregue,
    };

    fs.writeFile("./data/pedidos.json", JSON.stringify(jsonData));
    res.send(jsonData.pedidos[i]);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.put("/status/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { entregue } = req.body;
    const data = await fs.readFile("./data/pedidos.json");
    const jsonData = JSON.parse(data);

    let i;
    jsonData.pedidos.map((item, index) => {
      if (item.id === parseInt(id)) {
        i = index;
      }
    });

    jsonData.pedidos[i] = { ...jsonData.pedidos[i], entregue };

    fs.writeFile("./data/pedidos.json", JSON.stringify(jsonData));
    res.send(jsonData.pedidos[i]);
  } catch (error) {
    res.status(400).send({ error: err.message });
  }
});

router.delete("/deletar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile("./data/pedidos.json");
    const jsonData = JSON.parse(data);

    const newArray = jsonData.pedidos.filter((items) => {
      return items.id !== parseInt(id);
    });
    jsonData.pedidos = newArray;
    jsonData.nextId--;
    fs.writeFile("./data/pedidos.json", JSON.stringify(jsonData));
    res.send({ msg: "Item excluído!" });
  } catch (error) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/consultar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile("./data/pedidos.json");
    const jsonData = JSON.parse(data);

    const selectedItem = jsonData.pedidos.find((item) => {
      return item.id === parseInt(id);
    });

    res.send(selectedItem);
  } catch (error) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/valorTotalCliente/:cliente", async (req, res) => {
  try {
    const { cliente } = req.params;
    const data = await fs.readFile("./data/pedidos.json");
    const jsonData = JSON.parse(data);

    const userOrders = jsonData.pedidos.filter((items) => {
      return items.cliente === cliente && items.entregue === true;
    });

    let totalSum = 0;
    userOrders.map((order) => {
      totalSum += order.valor;
    });

    const formatedData = [
      ...userOrders,
      { totalGasto: `R$ ${totalSum.toFixed(2)}` },
    ];

    res.send(formatedData);
  } catch (error) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/valorTotalProduto/:produto", async (req, res) => {
  try {
    const { produto } = req.params;
    const data = await fs.readFile("./data/pedidos.json");
    const jsonData = JSON.parse(data);

    const productsOrders = jsonData.pedidos.filter((items) => {
      return items.produto === produto && items.entregue === true;
    });

    let totalSum = 0;
    productsOrders.map((order) => {
      totalSum += order.valor;
    });

    const formatedData = [
      ...productsOrders,
      { totalGasto: `R$ ${totalSum.toFixed(2)}` },
    ];

    res.send(formatedData);
  } catch (error) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/maisVendidos", async (req, res) => {
  try {
    const data = await fs.readFile("./data/pedidos.json");
    const jsonData = JSON.parse(data);

    const pizzasNames = [];
    jsonData.pedidos.map((order) => {
      if (pizzasNames.includes(order.produto)) {
        return;
      } else {
        pizzasNames.push(order.produto);
      }
    });

    const pizzasInfo = [];

    for (const pizza of pizzasNames) {
      const totalOrders = jsonData.pedidos.filter((orders) => {
        return orders.produto === pizza && orders.entregue === true;
      });

      pizzasInfo.push({ pizzaName: pizza, totalOrder: totalOrders.length });
    }

    const orderedPizzaInfo = _.orderBy(pizzasInfo, ["totalOrder"], ["desc"]);

    const finalDataFormated = [];
    orderedPizzaInfo.map((item) => {
      finalDataFormated.push(`${item.pizzaName} - ${item.totalOrder}`);
    });

    res.send(finalDataFormated);
  } catch (error) {
    res.status(400).send({ error: err.message });
  }
});

export default router;
