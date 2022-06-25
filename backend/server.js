const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

// config
dotenv.config();

// Connecting to database
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Sutting down the server due to unhandled rejection`);

  server.close(() => {
    process.exit(1);
  });
});
