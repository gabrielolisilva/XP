import express from "express";

const router = express.Router();

import {
  createVendaController,
  updateVendaController,
  deleteVendaController,
  getVendasController,
  getVendaController,
} from "../controllers/vendas.controller.js";

router.post("/", createVendaController);
router.put("/", updateVendaController);
router.delete("/:livroId", deleteVendaController);
router.get("/", getVendasController);
router.get("/:livroId", getVendaController);

export default router;
