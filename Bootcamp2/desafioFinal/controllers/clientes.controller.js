import {
  createClienteService,
  updateClienteService,
  deleteClienteService,
  getClientesService,
  getClienteService,
} from "../services/clientes.service.js";

const createClienteController = async (req, res, next) => {
  const cliente = req.body;

  try {
    if (
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      res.status(400).send({ msg: "Informações faltando!" });
    }

    res.send(createClienteService(cliente));
  } catch (err) {
    console.log(err);
  }
};

const updateClienteController = async (req, res, next) => {
  const cliente = req.body;

  try {
    if (
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      res.status(400).send({ msg: "Informações faltando!" });
    }

    res.send(updateClienteService(cliente));
  } catch (err) {
    console.log(err);
  }
};

const deleteClienteController = async (req, res, next) => {
  const { clienteId } = req.params;

  try {
    if (!clienteId) {
      res.status(400).send({ msg: "ID necessário para exclusão" });
    }

    res.send(deleteClienteService(clienteId));
  } catch (err) {
    console.log(err);
  }
};

const getClientesController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getClientesService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getClienteController = async (req, res, next) => {
  const { clienteId } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getClienteService(clienteId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createClienteController,
  updateClienteController,
  deleteClienteController,
  getClientesController,
  getClienteController,
};
