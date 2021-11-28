const mongoose = require("mongoose")



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

module.exports = mongoose.model("user",userSchema)

// ************* user Schema *************//