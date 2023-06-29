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
router.delete("/:proprietarioId", deleteProprietarioController);
router.get("/", getProprietariosController);
router.get("/:proprietarioId", getProprietarioController);

export default router;
