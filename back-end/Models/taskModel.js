const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  reminder: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', taskSchema)