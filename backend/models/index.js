import User from "./User.js";
import Restaurant from "./Restaurant.js";
import Table from "./Table.js";
import Reservation from "./Reservation.js";

// Relaciones
Restaurant.hasMany(Table, { foreignKey: "restaurantId" });
Table.belongsTo(Restaurant, { foreignKey: "restaurantId" });

User.hasMany(Reservation, { foreignKey: "userId" });
Reservation.belongsTo(User, { foreignKey: "userId" });

Table.hasMany(Reservation, { foreignKey: "tableId" });
Reservation.belongsTo(Table, { foreignKey: "tableId" });

export { User, Restaurant, Table, Reservation };