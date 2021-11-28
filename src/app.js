const express = require("express")
const { appendFile } = require("fs")


const connect = require("./configs/db")



const userController = require("./controllers/users.controllers")

const sectionController = require("./controllers/sections.controllers")

const bookController = require("./controllers/books.controllers")

const authorController = require("./controllers/authors.controllers")

const checkoutController = require("./controllers/checkouts.controllers")

const app= express()
app.use(express.json())

app.use("/users", userController)
app.use("/sections", sectionController)
app.use("/books", bookController)
app.use("/authors", authorController)
app.use("/checkouts", checkoutController)

module.exports = app

