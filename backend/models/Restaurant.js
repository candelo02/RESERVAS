import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Restaurant = sequelize.define("Restaurant", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
});

export default Restaurant;