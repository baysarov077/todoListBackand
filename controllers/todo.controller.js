const Todo = require('../models/Todo.model')

module.exports.todoController = {
  addTodo: async (req, res) => {
    try {
      const todo = await Todo.create({
        text: req.body.text
      });
      res.json(todo)
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id)
      res.json('Дело удалено')
    } catch (err) {
      console.log(err);
    }
  },
  getTodo: async (req, res) => {
    try {
      const getTodo = await Todo.find()
      res.json(getTodo)
    } catch (err) {
      console.log(err);
    }
  },
  patchTodo: async (req, res) => {
    try {
      await Todo.findByIdAndUpdate(req.params.id, {
        completed: req.body.completed,
      })
      res.json('update')
    } catch (err) {
      console.log(err);
    }
  }
}