import {
  createVendaService,
  updateVendaService,
  deleteVendaService,
  getAutorSellerService,
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
  const { vendaId } = req.params;

  try {
    if (!vendaId) {
      res.status(400).send({ msg: "ID necessário para exclusão" });
    }

    res.send(deleteVendaService(vendaId));
  } catch (err) {
    console.log(err);
  }
};

const getAutorSellerController = async (req, res, next) => {
  const { autorId } = req.query;

  if (!autorId) {
    res.status(400).send({ msg: "ID necessário para exclusão" });
  }

  res.send(getAutorSellerService(autorId));
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
  const { vendaId } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getVendaService(vendaId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createVendaController,
  updateVendaController,
  deleteVendaController,
  getAutorSellerController,
  getVendasController,
  getVendaController,
};
