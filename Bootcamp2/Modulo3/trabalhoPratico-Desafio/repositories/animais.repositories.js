import Animal from "../models/animais.model.js";
import Proprietario from "../models/proprietarios.model.js";

const insertAnimalRepository = async (animal) => {
  try {
    return await Animal.create(animal);
  } catch (err) {
    console.log(err);
  }
};

const updateAnimalRepository = async (animal) => {
  try {
    return await Animal.update(animal, {
      where: {
        animalId: animal.animal_id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteAnimalRepository = async (id) => {
  try {
    await Animal.destroy({
      where: {
        animalId: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getAnimaisRepository = async () => {
  try {
    return await Animal.findAll({
      include: [
        {
          model: Proprietario,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

const getAnimalRepository = async (id) => {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    console.log(err);
  }
};

export {
  insertAnimalRepository,
  updateAnimalRepository,
  deleteAnimalRepository,
  getAnimaisRepository,
  getAnimalRepository,
};
