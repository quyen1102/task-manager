
const Task = require('../model/task-manager')
// const {mutipleMongooseToObject} = require('../../util/mongo')
const asyncWrapper = require('../../middleware/async')
const { createCustomError } = require('../../error/cumstom-error')

// Lam theo tutorial of FreeCodeCamp
//     // GET || api/v1/tasks
const getAllTasks = asyncWrapper( async(req, res, next) =>{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})
 //GET || api/v1/tasks/:id
const getTask = asyncWrapper( async(req, res, next) =>{
    const {id: taskID } = req.params
    const task = await Task.findOne({_id: taskID})
    if (!task) {
        return next(createCustomError(`No task with id ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

//POST || api/v1/tasks
const createTask = asyncWrapper( async(req, res, next) =>{
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

 //DELETE || api/v1/tasks/:id
const deleteTask = asyncWrapper( async(req, res, next) =>{
    const task = await Task.findOneAndDelete({_id: req.params.id})
    res.status(200).json({ task })
})
 //PATCH || api/v1/tasks/:id
const updateTask = asyncWrapper( async(req, res, next) =>{
    const {id: taskID } = req.params
    const task = await Task.findOneAndUpdate({_id: taskID},req.body, {
        new: true,
        runValidators: true,
    })
    if (!task) {
       return next(createCustomError(`no task with id: ${taskID}`, 404))
        
    }
    res.status(200).json({ task })
})

// Tu lam
// class taskController {

//     // GET || api/v1/tasks
//     getAllTasks(req,res) {
//         Task.find({})
//             .then((task)=> {
//                 res.status(200).json({task})
//             })
//             .catch(err => res.status(500).json({msg:err}))
       
//     }
    
    
    
    
//     //GET || api/v1/tasks/:id
//     getTask(req,res, next) {
//         const {id:taskID} = req.params
//         Task.findOne({_id:taskID})
//             .then(task => {
//                 if(!task){
//                     return res.status(404).json({msg: `no task with id: ${taskID}`})
//                 }
//                 res.status(200).json({task})
//             })
//             .catch(err => res.status(500).json({msg : err}))
//     }

//     //POST || api/v1/tasks
//     createTask(req,res, next) {
//         const task = new Task(req.body)
//         task.save()
//             .then(() => { 
//                 res.status(201).json({task})
//             })
//             .catch(err => res.status(500).json({msg: err}))
        
//     }

//     //DELETE || api/v1/tasks/:id
//     deleteTask(req,res, next) {
//         Task.findOneAndDelete({_id:req.params.id})
//         .then(task => {
//             if(!task){
//                 return res.status(404).json({msg: `no task with id: ${taskID}`})
//             }
//             res.status(200).json({task})
//         })
//         .catch(err => res.status(500).json({msg : err}))
//     }

//     //PATCH || api/v1/tasks/:id
//     updateTask(req,res, next) {
//         const {id:taskID} = req.params

//         Task.findOneAndUpdate({_id:taskID},req.body, {
//             new: true,
//             runValidators: true,
//             } )
//             .then(task => {
//                 if(!task){
//                     return res.status(404).json({msg: `no task with id: ${taskID}`})
//                 }
//                 res.status(200).json({task})
//             })
//             .catch(err => res.status(500).json({msg : err}))
//     }
// }

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}