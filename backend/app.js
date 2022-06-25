const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

// Route Imports
const product = require("./routes/ProductRoute");

app.use("/api/v1", product);

// middleware for product
app.use(errorMiddleware);

module.exports = app;
