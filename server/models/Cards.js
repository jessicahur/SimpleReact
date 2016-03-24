const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Card = new Schema({
  title: String,
  description: String,
  status: String,
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}]
});

module.exports = mongoose.model('Card', Card);
