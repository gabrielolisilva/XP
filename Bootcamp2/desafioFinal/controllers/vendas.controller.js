import {
  createVendaService,
  updateVendaService,
  deleteVendaService,
  getVendasService,
  getVendaService,
} from "../services/vendas.service.js";

const createVendaController = async (req, res, next) => {
  const venda = req.body;

  try {
    if (!venda.valor || !venda.data || !venda.cliente_id || !venda.livro_id) {
      res.status(400).send({ msg: "Informações faltando!" });
    }

    res.send(createVendaService(venda));
  } catch (err) {
    console.log(err);
  }
};

const updateVendaController = async (req, res, next) => {
  const venda = req.body;

  try {
    if (!venda.valor || !venda.data || !venda.cliente_id || !venda.livro_id) {
      res.status(400).send({ msg: "Informações faltando!" });
    }

    res.send(updateVendaService(venda));
  } catch (err) {
    console.log(err);
  }
};

const deleteVendaController = async (req, res, next) => {
  const { livroId } = req.params;

  try {
    if (!livroId) {
      res.status(400).send({ msg: "ID necessário para exclusão" });
    }

    res.send(deleteVendaService(livroId));
  } catch (err) {
    console.log(err);
  }
};

const getVendasController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getVendasService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getVendaController = async (req, res, next) => {
  const { livroId } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getVendaService(livroId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createVendaController,
  updateVendaController,
  deleteVendaController,
  getVendasController,
  getVendaController,
};
