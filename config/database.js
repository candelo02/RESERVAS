// config/database.js
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "nombre_basedatos",
  process.env.DB_USER || "usuario",
  process.env.DB_PASSWORD || "contraseña", // ← Aquí está el cambio
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306, // también puedes incluir esto si lo necesitas
    dialect: process.env.DB_DIALECT || "mysql",
  }
);

export default sequelize;
