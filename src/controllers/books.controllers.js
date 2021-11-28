const express = require("express")

const Book = require("../models/books.model")

const router = express.Router()


/// ************* books CURD *****************//

router.post("", async(req,res)=>{
    try{
    const book = await Book.create(req.body)
    res.status(201).send(book)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})

router.get("",async(req,res)=>{
    try{
     const book = await Book.find().lean().exec()
   return  res.send({book})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})



router.get("/:id", async(req,res)=>{
    try{
      const book = await Book.findById(req.params.id ).lean().exec() 
      return res.send({book})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

router.patch("/:id",async(req,res)=>{
      try{
            const book = await Book.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(book)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

router.delete("/:id",async(req,res)=>{
    try{
         const book = await Book.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(book)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})


/// ************* books CURD *****************//

module.exports = router