const mongoose = require("mongoose")

// **************** checkout Schema******************/
const checkoutSchema = new mongoose.Schema({
    checkout_s:{type:Boolean, required: true},
    book_id :{
        type :  mongoose.Schema.Types.ObjectId,
        ref : "book",
        required: true ,
    }
    
    
},{
    versionKey:false,
    timestamps:true ,
})
module.exports  = mongoose.model("checkout",checkoutSchema)

// **************** checkout Schema******************/