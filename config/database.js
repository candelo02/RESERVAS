// config/database.js
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "nombre_basedatos",
  process.env.DB_USER || "usuario",
  process.env.DB_PASS || "contraseña",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql", // Cambia a "postgres" o "sqlite" si es necesario
  }
);

export default sequelize;

