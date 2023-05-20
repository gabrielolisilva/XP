import express, { json } from "express";
const router = express.Router();
import { promises as fs } from "fs";
import _ from "lodash";

router.get("/marcas/maisModelos", async (req, res) => {
  const data = await fs.readFile("./data/car-list.json");
  const jsonData = JSON.parse(data);
  let biggerValue = 0;
  let indice = 0;
  jsonData.map((obj, index) => {
    if (obj.models.length > biggerValue) {
      biggerValue = obj.models.length;
      indice = index;
    }
  });
  res.send(jsonData[indice]);
});

router.get("/marcas/menosModelos", async (req, res) => {
  const data = await fs.readFile("./data/car-list.json");
  const jsonData = JSON.parse(data);
  let smallerValue = jsonData[0].models.length;
  let indice = 0;

  jsonData.map((obj, index) => {
    if (obj.models.length < smallerValue) {
      smallerValue = obj.models.length;
      indice = index;
    }
  });
  res.send(jsonData[indice]);
});

router.get("/marcas/listaMaisModelos/:count", async (req, res) => {
  const { count } = req.params;
  const data = await fs.readFile("./data/car-list.json");
  const jsonData = JSON.parse(data);

  const orderedArray = _.orderBy(jsonData, ["models.length"], ["desc"]);
  const arrayRange = orderedArray.slice(0, count);
  res.send(arrayRange);
});

router.get("/marcas/listaMenosModelos/:count", async (req, res) => {
  const { count } = req.params;
  const data = await fs.readFile("./data/car-list.json");
  const jsonData = JSON.parse(data);

  const orderedArray = _.orderBy(jsonData, ["models.length"], ["asc"]);
  const arrayRange = orderedArray.slice(0, count);
  res.send(arrayRange);
});

router.get("/marcas/listaModelos/:marca", async (req, res) => {
  const { marca } = req.params;
  const data = await fs.readFile("./data/car-list.json");
  const jsonData = JSON.parse(data);

  const especificBrand = _.find(jsonData, { brand: marca });
  res.send(especificBrand);
});

export default router;
