import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Cliente from "./clientes.model.js";
import Livro from "./livros.model.js";

const Venda = db.define(
  "vendas",
  {
    vendaId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    clienteId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    livroId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

Venda.belongsTo(Cliente, { foreignKey: "clienteId" });
Venda.belongsTo(Livro, { foreignKey: "livroId" });

export default Venda;
