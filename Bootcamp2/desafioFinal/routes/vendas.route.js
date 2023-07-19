import express from "express";

const router = express.Router();

import {
  createVendaController,
  updateVendaController,
  deleteVendaController,
  getVendasController,
  getVendaController,
  getAutorSellerController,
} from "../controllers/vendas.controller.js";

router.post("/", createVendaController);
router.put("/", updateVendaController);
router.delete("/:vendaId", deleteVendaController);
router.get("/", getAutorSellerController);
router.get("/", getVendasController);
router.get("/:vendaId", getVendaController);

export default router;
