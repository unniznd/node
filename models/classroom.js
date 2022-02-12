const mongoose = require('mongoose')


const classroomSchema = new mongoose.Schema({
    standard: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Classroom', classroomSchema)