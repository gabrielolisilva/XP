import Cliente from "../models/clientes.model.js";

const insertClienteRepository = async (cliente) => {
  try {
    return await Cliente.create(cliente);
  } catch (err) {
    console.log(err);
  }
};

const updateClienteRepository = async (cliente) => {
  try {
    return await Cliente.update(cliente, {
      where: {
        clienteId: cliente.cliente_id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteClienteRepository = async (id) => {
  try {
    await Cliente.destroy({
      where: {
        clienteId: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getClientesRepository = async () => {
  try {
    return await Cliente.findAll({});
  } catch (err) {
    console.log(err);
  }
};

const getClienteRepository = async (id) => {
  try {
    return await Cliente.findByPk(id);
  } catch (err) {
    console.log(err);
  }
};

export {
  insertClienteRepository,
  updateClienteRepository,
  deleteClienteRepository,
  getClientesRepository,
  getClienteRepository,
};
