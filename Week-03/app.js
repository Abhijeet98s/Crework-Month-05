const express = require("express");
const mongodbConnect = require("./config/todoDB");
const app = express();
const todoRoute = require("./routes/todoRoute");
const taskRoute = require("./routes/taskRoute");

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", todoRoute);
app.use("/", taskRoute);

// DatabaseConnections
mongodbConnect();

module.exports = app;
