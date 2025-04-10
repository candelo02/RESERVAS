import { Reservation, Restaurant, Table } from "../models/index.js";

const resolvers = {
  Query: {
    restaurants: async () => await Restaurant.findAll(),
    tables: async (_, { restaurantId }) => await Table.findAll({ where: { restaurantId } }),
    reservations: async (_, { userId }) => await Reservation.findAll({ where: { userId } }),
  },
  Mutation: {
    createReservation: async (_, { userId, tableId, date, time }) => {
      const reservation = await Reservation.create({ userId, tableId, date, time });
      await Table.update({ isAvailable: false }, { where: { id: tableId } });
      return reservation;
      
    },
    createRestaurant: async (_, { name, address, phone }) => {
      return await Restaurant.create({ name, address, phone });
    },
    createTable: async (_, { restaurantId, capacity }) => {
      return await Table.create({ restaurantId, capacity, isAvailable: true });
    },
    createUser: async (_, { name, email, phone }) => {
      return await User.create({ name, email, phone });
    },
  },

};

export default resolvers;
