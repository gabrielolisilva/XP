import express from "express";

const router = express.Router();

import {
  createLivroController,
  updateLivroController,
  deleteLivroController,
  getLivrosController,
  getLivroController,
} from "../controllers/livros.controller.js";

router.post("/", createLivroController);
router.put("/", updateLivroController);
router.delete("/:livroId", deleteLivroController);
router.get("/", getLivrosController);
router.get("/:livroId", getLivroController);

export default router;
