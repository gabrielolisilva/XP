import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "",
  {
    dialect: "postgres",
    define: {
      timestamps: false, //create_at, updated_at
    },
  }
);

export default sequelize;
