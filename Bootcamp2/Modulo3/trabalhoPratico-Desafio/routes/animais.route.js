import express from "express";
import {
  createAnimalController,
  updateAnimalController,
  deleteAnimalController,
  getAnimaisController,
  getAnimalController,
} from "../controllers/animais.controller.js";

const router = express.Router();

router.post("/", createAnimalController);
router.put("/", updateAnimalController);
router.delete("/:animalId", deleteAnimalController);
router.get("/", getAnimaisController);
router.get("/:animalId", getAnimalController);

export default router;
