require("dotenv").config(); // siempre primera línea
const app = require("./app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

connectDB().then(() => {       // primero conecta DB
  app.listen(PORT, () => {     // luego arranca el servidor
    console.log(`Server running on port ${PORT}`);
  });
});