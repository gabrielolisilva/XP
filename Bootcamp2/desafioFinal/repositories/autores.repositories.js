import Autor from "../models/autores.model.js";

const insertAutorRepository = async (autor) => {
  try {
    return await Autor.create(cliente);
  } catch (err) {
    console.log(err);
  }
};

const updateAutorRepository = async (autor) => {
  try {
    return await Autor.update(autor, {
      where: {
        autorId: autor.autor_id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteAutorRepository = async (id) => {
  try {
    await Autor.destroy({
      where: {
        autorId: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getAutoresRepository = async () => {
  try {
    return await Autor.findAll({
      include: [
        {
          model: Autor,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

const getAutorRepository = async (id) => {
  try {
    return await Autor.findByPk(id);
  } catch (err) {
    console.log(err);
  }
};

export {
  insertAutorRepository,
  updateAutorRepository,
  deleteAutorRepository,
  getAutoresRepository,
  getAutorRepository,
};
