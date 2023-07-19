import Livro from "../models/livros.model.js";
import Autor from "../models/autores.model.js";

const insertLivroRepository = async (livro) => {
  try {
    return await Livro.create(livro);
  } catch (err) {
    console.log(err);
  }
};

const updateLivroRepository = async (livro) => {
  try {
    return await Livro.update(livro, {
      where: {
        livroId: livro.livro_id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteLivroRepository = async (id) => {
  try {
    await Livro.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getLivrosRepository = async () => {
  try {
    return await Livro.findAll({
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

const getLivroRepository = async (id) => {
  try {
    return await Livro.findByPk(id);
  } catch (err) {
    console.log(err);
  }
};

export {
  insertLivroRepository,
  updateLivroRepository,
  deleteLivroRepository,
  getLivrosRepository,
  getLivroRepository,
};
