const express = require("express");
const mongoose = require("mongoose");
const { router: teacherRouter } = require("./routes/teacherRoute");
const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI);
mongoose.Promise = global.Promise;

const app = express();

app.use("/api/teachers", teacherRouter);

module.exports = app;
