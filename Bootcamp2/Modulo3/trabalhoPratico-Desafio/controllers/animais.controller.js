import {
  createAnimalService,
  updateAnimalService,
  deleteAnimalService,
  getAnimaisService,
  getAnimalService,
} from "../services/animais.service.js";

const createAnimalController = async (req, res, next) => {
  const animal = req.body;

  try {
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      res
        .status(400)
        .send({ msg: "Nome, tipo e proprietário são obrigatórios!" });
    }

    res.send(createAnimalService(animal));
  } catch (err) {
    console.log(err);
  }
};

const updateAnimalController = async (req, res, next) => {
  const animal = req.body;

  try {
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      res
        .status(400)
        .send({ msg: "Nome, tipo e proprietário são obrigatórios!" });
    }

    res.send(updateAnimalService(animal));
  } catch (err) {
    console.log(err);
  }
};

const deleteAnimalController = async (req, res, next) => {
  const { animalId } = req.params;

  try {
    if (!animalId) {
      res.status(400).send({ msg: "ID nessário para exclusão" });
    }

    res.send(deleteAnimalService(animalId));
  } catch (err) {
    console.log(err);
  }
};

const getAnimaisController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getAnimaisService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getAnimalController = async (req, res, next) => {
  const { animalId } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getAnimalService(animalId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createAnimalController,
  updateAnimalController,
  deleteAnimalController,
  getAnimaisController,
  getAnimalController,
};
