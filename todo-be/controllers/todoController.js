const asyncHandler = require("express-async-handler");
const { Todo,validate } = require("../models/todoModel");

const getItems = async (req, res) => {
    const items = await Todo.find({}).sort("Titile");
    res.send(items);
    };

    
const createItem = async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
        }
    const newItem = new Todo({
        Titile: req.body.Titile,
        Description: req.body.Description,
        Completed: req.body.Completed,
        });
    try {
        await newItem.save();
        res.send(newItem);
        } catch (err) {
        console.log("Error: ", err.message);
        res.status(404).send(err.message);
        }
    
    };


const deleteItem = async (req, res) => {
    try {
        const item = await Todo.findByIdAndRemove(req.params.id);
        if (!item) {
            return res.status(404).send("The item with given ID was not found");
            }
        res.send(item);
        } catch (err) {
        console.log("Error: ", err.message);
        res.status(404).send(err.message);
        }
    };

const updateItem = async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
        }
    try {
        const item = await Todo.findByIdAndUpdate(
        req.params.id,
        {
            Titile: req.body.Titile,
            Description: req.body.Description,
            Completed: req.body.Completed,
            },
        { new: true }
        );
        if (!item) {
            return res.status(404).send("The item with given ID was not found");
            }
        res.send(item);
        } catch (err) {
        console.log("Error: ", err.message);
        res.status(404).send(err.message);
        }
    };

const completeItems = async (req, res) => {
    const items = await Todo.find({ Completed: true });
    res.send(items);
    };


module.exports = {
    getItems,
    createItem,
    deleteItem,
    updateItem,
    completeItems,
    };
            
