import {
  insertVendaRepository,
  updateVendaRepository,
  deleteVendaRepository,
  getAutorSellerRepository,
  getVendasRepository,
  getVendaRepository,
} from "../repositories/vendas.repositories.js";

const createVendaService = (venda) => {
  return insertVendaRepository(venda);
};

const updateVendaService = (venda) => {
  return updateVendaRepository(venda);
};

const deleteVendaService = (id) => {
  return deleteVendaRepository(id);
};

const getAutorSellerService = (autorId) => {
  return getAutorSellerRepository(autorId);
};

const getVendasService = () => {
  return getVendasRepository();
};

const getVendaService = (id) => {
  return getVendaRepository(id);
};

export {
  createVendaService,
  updateVendaService,
  deleteVendaService,
  getAutorSellerService,
  getVendasService,
  getVendaService,
};
