import {
  createAutorService,
  updateAutorService,
  deleteAutorService,
  getAutoresService,
  getAutorService,
} from "../services/autores.service.js";

const createAutorController = async (req, res, next) => {
  const autor = req.body;

  try {
    if (!autor.nome || !autor.email || !autor.telefone) {
      res.status(400).send({ msg: "Informações faltando!" });
    }

    res.send(createAutorService(autor));
  } catch (err) {
    console.log(err);
  }
};

const updateAutorController = async (req, res, next) => {
  const autor = req.body;

  try {
    if (!autor.nome || !autor.email || !autor.telefone) {
      res.status(400).send({ msg: "Informações faltando!" });
    }

    res.send(updateAutorService(autor));
  } catch (err) {
    console.log(err);
  }
};

const deleteAutorController = async (req, res, next) => {
  const { autorId } = req.params;

  try {
    if (!autorId) {
      res.status(400).send({ msg: "ID necessário para exclusão" });
    }

    res.send(deleteAutorService(autorId));
  } catch (err) {
    console.log(err);
  }
};

const getAutoresController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getAutoresService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getAutorController = async (req, res, next) => {
  const { autorId } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getAutorService(autorId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createAutorController,
  updateAutorController,
  deleteAutorController,
  getAutoresController,
  getAutorController,
};
