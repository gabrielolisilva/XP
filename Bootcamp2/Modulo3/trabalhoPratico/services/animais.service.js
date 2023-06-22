import {
  insertAnimalRepository,
  updateAnimalRepository,
  deleteAnimalRepository,
  getAnimaisRepository,
  getAnimalRepository,
} from "../repositories/animais.repositories.js";

const createAnimalService = (animal) => {
  return insertAnimalRepository(animal);
};

const updateAnimalService = (animal) => {
  return updateAnimalRepository(animal);
};

const deleteAnimalService = (id) => {
  return deleteAnimalRepository(id);
};

const getAnimaisService = () => {
  return getAnimaisRepository();
};

const getAnimalService = (id) => {
  return getAnimalRepository(id);
};

export {
  createAnimalService,
  updateAnimalService,
  deleteAnimalService,
  getAnimaisService,
  getAnimalService,
};
