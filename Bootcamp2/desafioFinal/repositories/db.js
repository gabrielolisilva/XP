import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://sgmhrukt:nxikfrutsGm2sHKKxBMqIFXe979SlUeV@tuffi.db.elephantsql.com/sgmhrukt",
  {
    dialect: "postgres",
    define: {
      timestamps: false, //create_at, updated_at
    },
  }
);

export default sequelize;
