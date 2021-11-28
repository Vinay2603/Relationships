const express = require("express")

const Author = require("./models/authors.model")

const router = express.Router()


// **************** author CURD *****************//

router.post("/authors", async(req,res)=>{
    try{
    const author = await Author.create(req.body)
    res.status(201).send(author)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})

router.get("/authors",async(req,res)=>{
    try{
     const author = await Author.find().lean().exec()
   return  res.send({author})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})



router.get("/authors/:id", async(req,res)=>{
    try{
      const author = await Author.findById(req.params.id ).lean().exec() 
      return res.send({author})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

router.patch("/authors/:id",async(req,res)=>{
      try{
            const author = await Author.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(author)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

router.delete("/authors/:id",async(req,res)=>{
    try{
         const author = await Author.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(author)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})


// **************** author CURD *****************//
module.exports = router
