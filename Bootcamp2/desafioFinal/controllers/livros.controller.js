import {
  createLivroService,
  updateLivroService,
  deleteLivroService,
  getLivrosService,
  getLivroService,
} from "../services/livros.service.js";

const createLivroController = async (req, res, next) => {
  const livro = req.body;

  try {
    if (!livro.nome || !livro.valor || !livro.estoque || !livro.autor_id) {
      res.status(400).send({ msg: "Informações faltando!" });
    }

    res.send(createLivroService(livro));
  } catch (err) {
    console.log(err);
  }
};

const updateLivroController = async (req, res, next) => {
  const livro = req.body;

  try {
    if (!livro.nome || !livro.valor || !livro.estoque || !livro.autor_id) {
      res.status(400).send({ msg: "Informações faltando!" });
    }

    res.send(updateLivroService(livro));
  } catch (err) {
    console.log(err);
  }
};

const deleteLivroController = async (req, res, next) => {
  const { livroId } = req.params;

  try {
    if (!livroId) {
      res.status(400).send({ msg: "ID necessário para exclusão" });
    }

    res.send(deleteLivroService(livroId));
  } catch (err) {
    console.log(err);
  }
};

const getLivrosController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getLivrosService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getLivroController = async (req, res, next) => {
  const { livroId } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getLivroService(livroId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createLivroController,
  updateLivroController,
  deleteLivroController,
  getLivrosController,
  getLivroController,
};
