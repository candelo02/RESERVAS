import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import { typeDefs } from "./schemas/typeDefs.js";
import resolvers from "./resolvers/index.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Rutas REST
app.use("/api", authRoutes);

// Configurar Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  try {
    await sequelize.sync({ force: false });
    console.log("📌 Base de datos sincronizada.");

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}${server.graphqlPath}`);
    });

  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
  }
}

startServer();
