const express = require("express")

const User = require("../modles/users.model")

const router = express.Router()



/// ************user CURD ******************//

router.post("", async(req,res)=>{
    try{
    const user = await User.create(req.body)
    res.status(201).send(user)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})

router.get("",async(req,res)=>{
    try{
     const user = await User.find().lean().exec()
   return  res.send({user})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})



router.get("/:id", async(req,res)=>{
    try{
      const user = await User.findById(req.params.id ).lean().exec() 
      return res.send({user})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

router.patch("/:id",async(req,res)=>{
      try{
            const user = await User.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(user)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

router.delete("/:id",async(req,res)=>{
    try{
         const user = await User.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(user)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})

/// ************user CURD ******************//

module.exports = router 