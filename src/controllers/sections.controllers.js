const express = require("express")

const Section = require("./models/sections.model")

const router = express.Router()


/// ************section CURD ******************//

router.post("", async(req,res)=>{
    try{
    const section = await Section.create(req.body)
    res.status(201).send(section)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})

router.get("",async(req,res)=>{
    try{
     const section = await Section.find().lean().exec()
   return  res.send({section})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})



router.get("/:id", async(req,res)=>{
    try{
      const section = await Section.findById(req.params.id ).lean().exec() 
      return res.send({section})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

router.patch("/:id",async(req,res)=>{
      try{
            const section = await Section.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(section)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

router.delete("/:id",async(req,res)=>{
    try{
         const section = await Section.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(section)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})

/// ************section CURD ******************//

module.exports= router