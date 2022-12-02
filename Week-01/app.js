const mongodbConnect = require("./config/database");
const dbRoutes = require('./routes/dbRoutes')
const express = require("express");
const app = express();

// MongoDB Connection
mongodbConnect()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/",dbRoutes)

module.exports = app;
