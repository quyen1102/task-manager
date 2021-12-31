

const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    getTask,
    deleteTask,
    updateTask,
    createTask,
} = require('../app/controller/taskController')


router.route('/')
    .get(getAllTasks)
    .post(createTask)
    
router.route('/:id')
    .get(getTask)
    .delete(deleteTask)
    .patch(updateTask)

// router.get('/', taskController.getAllTasks)
// router.get('/:id', taskController.getTask)
// router.post('/', taskController.createTask)
// router.patch('/:id', taskController.updateTask)
// router.delete('/:id', taskController.deleteTask)

module.exports = router