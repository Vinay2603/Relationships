const mongoose = require("mongoose")


//*****************  books Schema *********** */
const bookSchema = new mongoose.Schema({
    book_name :{ type:String , required:true },
    body :{ type:String , required:true },
    
    
},{
    versionKey:false,
    timestamps:true ,
})

module.exports = mongoose.model("book",sectionSchema)
//*****************  books Schema *********** */