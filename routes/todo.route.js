const { Router } = require('express')
const { todoController } = require('../controllers/todo.controller')

const router = Router()

router.post('/todo', todoController.addTodo)
router.delete('/todo/:id', todoController.deleteTodo)
router.get('/todo', todoController.getTodo)
router.patch('/todo/:id', todoController.patchTodo)

module.exports = router