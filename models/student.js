const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    rollNumber :{
        type: Number,
        required: true,
        unique: true
    },
    mobileNumber : {
        type: String,
        required: true,
        unique: true
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Classroom'
    }
})

module.exports = mongoose.model('Student',studentSchema)