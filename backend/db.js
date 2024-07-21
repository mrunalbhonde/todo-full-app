const mongoose = require("mongoose");
// mongodb+srv://admin:VbmCBFTByiVJGAUl@cluster0.rkvlplz.mongodb.net/
// shoudl add in .env file
mongoose.connect("mongodb+srv://admin:VbmCBFTByiVJGAUl@cluster0.rkvlplz.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}