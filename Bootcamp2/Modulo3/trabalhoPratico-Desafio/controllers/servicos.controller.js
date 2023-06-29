import {
  createServicoService,
  getServicosService,
  getServicoService,
} from "../services/servicos.service.js";

const createServicosController = async (req, res, next) => {
  const servico = req.body;

  try {
    if (!servico.descricao || !servico.valor || !servico.proprietarioId) {
      res
        .status(400)
        .send({ msg: "Descrição, valor e proprietário são obrigatórios!" });
    }

    res.send(createServicoService(servico));
  } catch (err) {
    console.log(err);
  }
};

const getServicosController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getServicosService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getServicoController = async (req, res, next) => {
  const { proprietarioId } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getServicoService(proprietarioId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createServicosController,
  getServicosController,
  getServicoController,
};
