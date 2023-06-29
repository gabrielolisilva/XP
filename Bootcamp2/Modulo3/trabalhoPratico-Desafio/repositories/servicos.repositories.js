import Servicos from "../models/servicos.model.js";
import Animal from "../models/animais.model.js";

const insertServicoRepository = async (servico) => {
  try {
    return await Servicos.create(servico);
  } catch (err) {
    console.log(err);
  }
};

const getServicosRepository = async () => {
  try {
    return await Servicos.findAll({
      include: [
        {
          model: Animal,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

const getServicoRepository = async (proprietarioId) => {
  try {
    return await Servicos.findByPk(proprietarioId, {
      include: [
        {
          model: Animal,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

export { insertServicoRepository, getServicosRepository, getServicoRepository };
