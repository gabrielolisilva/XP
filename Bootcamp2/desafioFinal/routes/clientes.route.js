import express from "express";

const router = express.Router();

import {
  createClienteController,
  updateClienteController,
  deleteClienteController,
  getClientesController,
  getClienteController,
} from "../controllers/clientes.controller.js";

router.post("/", createClienteController);
router.put("/", updateClienteController);
router.delete("/:clienteId", deleteClienteController);
router.get("/", getClientesController);
router.get("/:clienteId", getClienteController);

export default router;
