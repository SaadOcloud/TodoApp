const express = require("express");
const Joi = require('joi')
const mongoose = require("mongoose");
const config=require('dotenv').config();
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/DB")


const todoList = require("./routes/todoRoutes");

connectDB()

const app = express();
app.use(express.json());

app.use("/api/todo", todoList);

app.use(notFound)
app.use(errorHandler)

app.get("/", (req, res) => {
    res.send("It's running...");
    });

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening at Port ${PORT}...`));
