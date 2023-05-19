import express, { json } from "express";
const router = express.Router();
import { promises as fs, readFile } from "fs";

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

export default router;
