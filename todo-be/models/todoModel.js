const mongoose = require('mongoose')
const Joi = require('joi')

const todoSchema = new mongoose.Schema({
    Titile: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    Description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    Completed: {
        type: Boolean,
        default: false
    }
})

const Todo = new mongoose.model('todo', todoSchema)

const validItem = (todo) => {
    const schema = {
        Titile: Joi.string().min(5).max(255).required(),
        Description: Joi.string().min(5).max(255).required(),
        Completed: Joi.boolean()
    }

    return Joi.validate(todo, schema)
}

module.exports.Todo = Todo
module.exports.validate = validItem