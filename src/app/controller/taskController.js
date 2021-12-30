
const Task = require('../model/task-manager')
// const {mutipleMongooseToObject} = require('../../util/mongo')


class taskController {

    // GET || api/v1/tasks
    getAllTasks(req,res) {
        Task.find({})
            .then((task)=> {
                res.status(200).json({task})
            })
            .catch(err => res.status(500).json({msg:err}))
       
    }
    
    //GET || api/v1/tasks/:id
    getTask(req,res, next) {
        const {id:taskID} = req.params
        Task.findOne({_id:taskID})
            .then(task => {
                if(!task){
                    return res.status(404).json({msg: `no task with id: ${taskID}`})
                }
                res.status(200).json({task})
            })
            .catch(err => res.status(500).json({msg : err}))
    }

    //POST || api/v1/tasks
    createTask(req,res, next) {
        const task = new Task(req.body)
        task.save()
            .then(() => { 
                res.status(201).json({task})
            })
            .catch(err => res.status(500).json({msg: err}))
        
    }

    //DELETE || api/v1/tasks/:id
    deleteTask(req,res, next) {
        Task.findOneAndDelete({_id:req.params.id})
        .then(task => {
            if(!task){
                return res.status(404).json({msg: `no task with id: ${taskID}`})
            }
            res.status(200).json({task})
        })
        .catch(err => res.status(500).json({msg : err}))
    }

    //PATCH || api/v1/tasks/:id
    updateTask(req,res, next) {
        const {id:taskID} = req.params

        Task.findOneAndUpdate({_id:taskID},req.body, {
            new: true,
            runValidators: true,
            } )
            .then(task => {
                if(!task){
                    return res.status(404).json({msg: `no task with id: ${taskID}`})
                }
                res.status(200).json({task})
            })
            .catch(err => res.status(500).json({msg : err}))
    }
}

module.exports = new taskController;