import express from "express";
import {
  createServicosController,
  getServicosController,
  getServicoController,
} from "../controllers/servicos.controller.js";

const router = express.Router();

router.post("/", createServicosController);
router.get("/", getServicosController);
router.get("/:proprietarioId", getServicoController);

export default router;
