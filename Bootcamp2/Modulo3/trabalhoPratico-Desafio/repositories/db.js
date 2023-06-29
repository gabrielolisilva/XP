import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://qrdtnxhs:e9xOVlTG0ok_5U3jgEnAffpBObe08l9b@silly.db.elephantsql.com/qrdtnxhs",
  {
    dialect: "postgres",
    define: {
      timestamps: false, //create_at, updated_at
    },
  }
);

export default sequelize;
