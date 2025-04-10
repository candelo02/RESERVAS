import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Reservation = sequelize.define("Reservation", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  tableId: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  time: { type: DataTypes.TIME, allowNull: false },
});

export default Reservation;