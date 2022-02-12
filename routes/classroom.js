const express = require('express')
const router = express.Router()
const Classroom = require('../models/classroom')


router.post('/', async(request, response) =>{
    const classroom = new Classroom({
        standard: request.body.standard,
        division: request.body.division
    })
    try{
        const clr = await classroom.save()
        response.send(clr)

    }catch(err){
        response.send("Error")
    }
})

router.delete('/:id', async(request, response) =>{
    try{
        await Classroom.deleteOne({_id:id})
        response.send("successful")
    }catch(err){
        response.send("Error")
    }
})

module.exports = router