const mongoose = require('mongoose');
const { type } = require('os');
const { Schema } = mongoose

const todoSchema = Schema({
  completed: {
    type: Boolean,
    default: false
  },
  text: String
})

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo