const express = require('express')
const router = express.Router()
const Student = require('../models/student')

router.get('', async(request, response)=>{
    try{
        //console.log(request.body.standard)
        const stud = await Student.aggregate([
            
            {
                $lookup: 
                {
                    from: 'classrooms',

                    as: 'details',
                    pipeline: [
                        {
                            $match:{
                                standard: request.body.standard
                            }
                        }
                    ]
                }
            }
        ])

        response.json(stud)
          
    }catch(err){
        console.log(err)
        response.send("Error")
    }
    
})


router.get('/:classId',async(request,response) =>{
    try{
        const students = await Student.find({classId:request.params.classId})
        response.json(students)
    }catch(err){
        response.send("Error")
    }
})

router.post('/', async(request, response) =>{
    const student = new Student({
        name : request.body.name,
        rollNumber : request.body.rollNumber,
        mobileNumber : request.body.mobileNumber,
        classId : request.body.classId
    })

    try{
        const stud = await student.save()
        response.json(stud)
    }catch(err){
        console.log(err)
        response.send("Error")
    }
    
})

router.patch('/:id', async(request, response) =>{
    try{
        const stud = await Student.findById(request.params.id)
        stud.classId = request.body.classId
        stud.save()
        response.send("successful")
    }catch(err){
        console.log(err)
        response.send("Error")
    }

})

router.delete('/:id', async(request, response)=>{
    try{
        await Student.deleteOne({_id:request.params.id})
        response.send("successful")
        
    }catch(err){
        console.log(err)
        response.send("Error")
    }
})


module.exports = router

