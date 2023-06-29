import {
  insertServicoRepository,
  getServicosRepository,
  getServicoRepository,
} from "../repositories/servicos.repositories.js";

const createServicoService = (servico) => {
  return insertServicoRepository(servico);
};

const getServicosService = () => {
  return getServicosRepository();
};

const getServicoService = (proprietarioId) => {
  return getServicoRepository(proprietarioId);
};

export { createServicoService, getServicosService, getServicoService };
