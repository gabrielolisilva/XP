import Proprietario from "../models/proprietarios.model.js";

const insertProprietarioRepository = async (proprietario) => {
  try {
    return await Proprietario.create(proprietario);
  } catch (err) {
    console.log(err);
  }
};

const updateProprietarioRepository = async (proprietario) => {
  try {
    await Proprietario.update(proprietario, {
      where: {
        proprietarioId: proprietario.proprietario_id,
      },
    });

    return getProprietarioRepository(proprietario.proprietario_id);
  } catch (err) {
    console.log(err);
  }
};

const deleteProprietarioRepository = async (id) => {
  try {
    await Proprietario.destroy({
      where: {
        proprietarioId: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getProprietariosRepository = async () => {
  try {
    return await Proprietario.findAll();
  } catch (err) {
    console.log(err);
  }
};

const getProprietarioRepository = async (id) => {
  try {
    return await Proprietario.findByPk(id);
  } catch (err) {
    console.log(err);
  }
};

export {
  insertProprietarioRepository,
  updateProprietarioRepository,
  deleteProprietarioRepository,
  getProprietariosRepository,
  getProprietarioRepository,
};
