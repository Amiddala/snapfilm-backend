const mongoose = require("mongoose");
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first"); //fuerza ipv4

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
