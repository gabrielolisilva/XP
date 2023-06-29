import {
  createProprietarioService,
  updateProprietarioService,
  deleteProprietarioService,
  getProprietariosService,
  getProprietarioService,
} from "../services/proprietarios.service.js";

const createProprietariosController = async (req, res, next) => {
  const proprietario = req.body;

  try {
    if (!proprietario.nome || !proprietario.telefone) {
      res.status(400).send({ msg: "Nome e telefone são obrigatórios!" });
    }

    res.send(createProprietarioService(proprietario));
  } catch (err) {
    console.log(err);
  }
};

const updateProprietariosController = async (req, res, next) => {
  const proprietario = req.body;

  try {
    if (
      !proprietario.proprietarioId ||
      !proprietario.nome ||
      !proprietario.telefone
    ) {
      res.status(400).send({ msg: "ID, Nome e telefone são obrigatórios!" });
    }

    res.send(updateProprietarioService(proprietario));
  } catch (err) {
    console.log(err);
  }
};

const deleteProprietarioController = async (req, res, next) => {
  const { proprietarioId } = req.params;

  try {
    if (!proprietarioId) {
      res.status(400).send({ msg: "ID nessário para exclusão" });
    }

    res.send(deleteProprietarioService(proprietarioId));
  } catch (err) {
    console.log(err);
  }
};

const getProprietariosController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getProprietariosService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getProprietarioController = async (req, res, next) => {
  const { proprietarioId } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getProprietarioService(proprietarioId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createProprietariosController,
  updateProprietariosController,
  deleteProprietarioController,
  getProprietariosController,
  getProprietarioController,
};
