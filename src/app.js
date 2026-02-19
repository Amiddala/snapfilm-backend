// ✅ app.js corregido
const express = require("express");
const cors = require("cors");
const homeRoutes = require("./src/routes/homeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", homeRoutes); // ← rutas aquí, en app.js

module.exports = app;