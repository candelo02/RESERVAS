// routes/auth.js
import express from "express";
const router = express.Router();

// Ruta de prueba (GET /api/)
router.get("/", (req, res) => {
  res.json({ message: "¡Ruta de autenticación funcionando!" });
});

export default router;
