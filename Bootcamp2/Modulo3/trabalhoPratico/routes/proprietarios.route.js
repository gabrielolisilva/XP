import express from "express";
import {
  createProprietariosController,
  updateProprietariosController,
  deleteProprietarioController,
  getProprietariosController,
  getProprietarioController,
} from "../controllers/proprietarios.controller.js";

const router = express.Router();

router.post("/", createProprietariosController);
router.put("/", updateProprietariosController);
router.delete("/:proprietario_id", deleteProprietarioController);
router.get("/", getProprietariosController);
router.get("/:proprietario_id", getProprietarioController);

export default router;
