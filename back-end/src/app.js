const express = require('express');
const cors = require('cors');
const tasksRouter = require('../Routes/tasks.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", tasksRouter);

module.exports = app;