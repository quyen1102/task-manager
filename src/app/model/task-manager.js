
const mongoose = require('mongoose')
const { Schema } = mongoose

const TaskSchema = new Schema({
    name:{
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxLength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Task', TaskSchema)