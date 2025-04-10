import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    address: String!
    phone: String!
    tables: [Table]
  }

  type Table {
    id: ID!
    capacity: Int!
    isAvailable: Boolean!
    restaurant: Restaurant
  }

  type Reservation {
    id: ID!
    date: String!
    time: String!
    user: User
    table: Table
  }

  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type Query {
    restaurants: [Restaurant]
    tables(restaurantId: ID!): [Table]
    reservations(userId: ID!): [Reservation]
  }

  type Mutation {
    createReservation(userId: ID!, tableId: ID!, date: String!, time: String!): Reservation
  }
  type Mutation {
    createRestaurant(name: String!, address: String!, phone: String!): Restaurant
    createTable(restaurantId: ID!, capacity: Int!): Table
    createUser(name: String!, email: String!, phone: String!): User
  }
`;