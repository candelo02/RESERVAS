import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Table = sequelize.define("Table", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  restaurantId: { type: DataTypes.INTEGER, allowNull: false },
  capacity: { type: DataTypes.INTEGER, allowNull: false },
  isAvailable: { type: DataTypes.BOOLEAN, defaultValue: true },
});

export default Table;