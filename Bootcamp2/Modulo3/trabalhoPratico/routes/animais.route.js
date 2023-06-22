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
router.delete("/:animal_id", deleteAnimalController);
router.get("/", getAnimaisController);
router.get("/:animal_id", getAnimalController);

export default router;
