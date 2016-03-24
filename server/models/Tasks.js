const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
  name: String,
  done: Boolean
});

module.exports = mongoose.model('Task', Task);
