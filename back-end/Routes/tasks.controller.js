const taskModel = require('../Models/taskModel');
const mongoose = require('mongoose');

async function list(_req, res) {
  let allTasks = await taskModel.find({});
  res.status(200).json(allTasks);
}

async function create(req, res) {
  const {text, day, reminder} = req.body;

  try {
    let task = await taskModel.create({text, day, reminder});
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
}

async function destroy(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such task"});
  }

  const task = await taskModel.findOneAndDelete({_id: id})

  if (!task) {
    return res.status(400).json({error: "No such task"});
  }

  res.status(200).json(task);
}

async function update(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such task"});
  }

  const task = await taskModel.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!task) {
    return res.status(400).json({error: "No such task"});
  }

  res.status(200).json(task);
}

module.exports = {
  list,
  create,
  destroy,
  update
}