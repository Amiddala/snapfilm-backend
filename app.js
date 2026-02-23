const express = require("express");
const cors = require("cors");
const homeRoutes = require("./src/routes/homeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", homeRoutes);

// LOG TEMPORAL
app.get("/test", (req, res) => {
  res.json({ message: "ruta directa funciona" });
});


module.exports = app;