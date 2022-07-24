
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "embed-db",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "sqlite",
    host: "./embedly.sqlite",
  }
);

export default sequelize;
