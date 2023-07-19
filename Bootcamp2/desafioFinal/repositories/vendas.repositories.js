import Venda from "../models/vendas.model.js";
import Cliente from "../models/clientes.model.js";
import Livro from "../models/livros.model.js";

const insertVendaRepository = async (venda) => {
  try {
    return await Venda.create(venda);
  } catch (err) {
    console.log(err);
  }
};

const updateVendaRepository = async (venda) => {
  try {
    return await Venda.update(venda, {
      where: {
        vendaId: venda.venda_id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteVendaRepository = async (id) => {
  try {
    await Venda.destroy({
      where: {
        vendaId: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getVendasRepository = async () => {
  try {
    return await Venda.findAll({
      include: [{ model: Cliente }, { model: Livro }],
    });
  } catch (err) {
    console.log(err);
  }
};

const getVendaRepository = async (id) => {
  try {
    return await Venda.findByPk(id);
  } catch (err) {
    console.log(err);
  }
};

export {
  insertVendaRepository,
  updateVendaRepository,
  deleteVendaRepository,
  getVendasRepository,
  getVendaRepository,
};
