const express = require("express");
const mongoose = require("mongoose");
const { router: studentRouter } = require("./_routes/studentRoute");
const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI);
mongoose.Promise = global.Promise;

const app = express();

app.use("/api/students", studentRouter);

module.exports = app;
