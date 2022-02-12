const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect("add_mongodb_url_here", {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(bodyParser.json())

const studentRouter = require('./routes/student')
app.use('/students',studentRouter)

const classroomRouter = require('./routes/classroom')
app.use('/classroom',classroomRouter)


server = app.listen(8000,() =>{
    console.log("Developement server running at http://localhost:8000")
})