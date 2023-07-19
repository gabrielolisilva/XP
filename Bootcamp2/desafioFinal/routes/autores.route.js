import express from "express";

const router = express.Router();

import {
  createAutorController,
  updateAutorController,
  deleteAutorController,
  getAutoresController,
  getAutorController,
} from "../controllers/autores.controller.js";

router.post("/", createAutorController);
router.put("/", updateAutorController);
router.delete("/:autorId", deleteAutorController);
router.get("/", getAutoresController);
router.get("/:autorId", getAutorController);

export default router;
