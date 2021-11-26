const express = require("express")
const { appendFile } = require("fs")
const mongoose = require("mongoose")

const connect = ()=>{
   return mongoose.connect("mongodb://127.0.0.1:27017")
}

// ************* user Schema *************//

const userSchema = new mongoose.Schema({
    first_name :{ type:String , required:true },
    last_name :{ type:String , required:false },
    email :{ type:String , required:true },
    gender :{ type:String , required:false ,default:"male" },
    age :{ type :Number , required:true },
},{
    versionKey:false,
    timestamps:true ,
})

const User= mongoose.model("user",userSchema)

// ************* user Schema *************//

//***************** Section Schema ************ */
const sectionSchema = new mongoose.Schema({
    section_name :{ type:String , required:true },
    book_id :[{
        type :  mongoose.Schema.Types.ObjectId,
        ref : "book",
        required: true ,
    }],
    author_id :[{
        type :  mongoose.Schema.Types.ObjectId,
        ref : "author",
        required: true ,
    }],
},{
    versionKey:false,
    timestamps:true ,
})

const Section = mongoose.model("section",sectionSchema)


//***************** Section Schema ************ */

//*****************  books Schema *********** */
const bookSchema = new mongoose.Schema({
    book_name :{ type:String , required:true },
    body :{ type:String , required:true },
    
    
},{
    versionKey:false,
    timestamps:true ,
})

const Book = mongoose.model("book",sectionSchema)
//*****************  books Schema *********** */

//*****************  aurthor Schema *********** */
const authorSchema = new mongoose.Schema({
    first_name :{ type:String , required:true },
    last_name :{ type:String , required:true },
    book_id :[{
        type :  mongoose.Schema.Types.ObjectId,
        ref : "book",
        required: true ,
    }]
    
    
},{
    versionKey:false,
    timestamps:true ,
})

const Author = mongoose.model("author",authorSchema)

//*****************  aurthor Schema *********** */

// **************** checkout Schema******************/
const checkoutSchema = new mongoose.Schema({
    user_name:{type:String , required: true},
    book_id :{
        type :  mongoose.Schema.Types.ObjectId,
        ref : "book",
        required: true ,
    }
    
    
},{
    versionKey:false,
    timestamps:true ,
})
const Checkout  = mongoose.model("checkout",checkoutSchema)

// **************** checkout Schema******************/

const app= express()
app.use(express.json())

/// ************user CURD ******************//

app.post("/users", async(req,res)=>{
    try{
    const user = await User.create(req.body)
    res.status(201).send(user)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})

app.get("/users",async(req,res)=>{
    try{
     const user = await User.find().lean().exec()
   return  res.send({user})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})



app.get("/users/:id", async(req,res)=>{
    try{
      const user = await User.findById(req.params.id ).lean().exec() 
      return res.send({user})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

app.patch("/users/:id",async(req,res)=>{
      try{
            const user = await User.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(user)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

app.delete("/users/:id",async(req,res)=>{
    try{
         const user = await User.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(user)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})

/// ************user CURD ******************//

/// ************section CURD ******************//

app.post("/sections", async(req,res)=>{
    try{
    const section = await Section.create(req.body)
    res.status(201).send(section)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})

app.get("/sections",async(req,res)=>{
    try{
     const section = await Section.find().lean().exec()
   return  res.send({section})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})



app.get("/sections/:id", async(req,res)=>{
    try{
      const section = await Section.findById(req.params.id ).lean().exec() 
      return res.send({section})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

app.patch("/sections/:id",async(req,res)=>{
      try{
            const section = await Section.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(section)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

app.delete("/sections/:id",async(req,res)=>{
    try{
         const section = await Section.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(section)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})

/// ************section CURD ******************//

/// ************* books CURD *****************//

app.post("/books", async(req,res)=>{
    try{
    const book = await Book.create(req.body)
    res.status(201).send(book)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})

app.get("/books",async(req,res)=>{
    try{
     const book = await Book.find().lean().exec()
   return  res.send({book})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})



app.get("/books/:id", async(req,res)=>{
    try{
      const book = await Book.findById(req.params.id ).lean().exec() 
      return res.send({book})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

app.patch("/books/:id",async(req,res)=>{
      try{
            const book = await Book.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(book)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

app.delete("/books/:id",async(req,res)=>{
    try{
         const book = await Book.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(book)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})


/// ************* books CURD *****************//



// **************** author CURD *****************//

app.post("/authors", async(req,res)=>{
    try{
    const author = await Author.create(req.body)
    res.status(201).send(author)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})

app.get("/authors",async(req,res)=>{
    try{
     const author = await Author.find().lean().exec()
   return  res.send({author})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})



app.get("/authors/:id", async(req,res)=>{
    try{
      const author = await Author.findById(req.params.id ).lean().exec() 
      return res.send({author})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

app.patch("/authors/:id",async(req,res)=>{
      try{
            const author = await Author.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(author)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

app.delete("/authors/:id",async(req,res)=>{
    try{
         const author = await Author.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(author)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})


// **************** author CURD *****************//


// *************** checkout CURD *****************//
 
app.post("/checkout", async(req,res)=>{
    try{
    const checkout = await Checkout.create(req.body)
    res.status(201).send(checkout)
    }catch(e){
        return res.send(500).json({message:e.message, status: "failed"})
    }
})

app.get("/checkout",async(req,res)=>{
    try{
     const checkout = await Checkout.find().lean().exec()
   return  res.send({checkout})
    }catch(e){
        return res.send(500).json({message:e.message,status: "failed"})
    }
})



app.get("/checkout/:id", async(req,res)=>{
    try{
      const checkout = await Checkout.findById(req.params.id ).lean().exec() 
      return res.send({checkout})
    }catch(e){
         return res.status(500).json({message:e.message, status:"failed"})
    }
})

app.patch("/checkout/:id",async(req,res)=>{
      try{
            const checkout = await Checkout.findByIdAndUpdate(req.params.id , req.body ,{new :true })
            return res.status(201).send(checkout)
      }catch{
          return res.status(500).json({message:e.message , status: "failed"})
      }
})

app.delete("/checkout/:id",async(req,res)=>{
    try{
         const checkout = await Checkout.findByIdAndDelete(req.params.id).lean().exec()
         return res.status(200).send(checkout)
    }catch(e){
        return res.status(500).json({message:e.message , status:"failed"})
    }
})


// *************** checkout CURD *****************//
app.listen(3456,async(req,res)=>{
    await connect()
    console.log("listing on the port 3456")
})