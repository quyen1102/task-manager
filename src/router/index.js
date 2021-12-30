

const taskRouter = require('./tasks')


function route(app) {
    app.use('/api/v1/tasks', taskRouter)
}

module.exports = route
