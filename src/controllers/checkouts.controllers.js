const express = require("express")

const Checkout = require("../models/checkouts.model")

const router = express.Router()



// *************** checkout CURD *****************//
 
router.post("", async(req,res)=>{
    try{
    const checkout = await Checkout.create(req.body)
    res.status(201).send(checkout)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})
/*
router.get("",async(req,res)=>{
    try{
     const checkout = await Checkout.find().lean().exec()
   return  res.send({checkout})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})*/
// to find books which are checkout 
router.get("", (req,res)=>{
    try{
       const checkout = Checkout.filter((check)=>   check.checkout_s == true )
       return  res.send({checkout})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})
// to find books which are checkin
router.get("", (req,res)=>{
    try{
       const checkout = Checkout.filter((check)=>   check.checkout_s != true )
       return  res.send({checkout})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})
router.get("/:id", async(req,res)=>{
    try{
      const checkout = await Checkout.findById(req.params.id ).lean().exec() 
      return res.send({checkout})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

router.patch("/:id",async(req,res)=>{
      try{
            const checkout = await Checkout.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(checkout)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

router.delete("/:id",async(req,res)=>{
    try{
         const checkout = await Checkout.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(checkout)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})


// *************** checkout CURD *****************//

module.exports = router