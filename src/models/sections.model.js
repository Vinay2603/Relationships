const mongoose = require("mongoose")

/***************** Section Schema ************ */
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

module.exports = mongoose.model("section",sectionSchema)


//***************** Section Schema ************ */