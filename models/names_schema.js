const mongoose=require("mongoose")



const nameSchema=new mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
            unique: true,
        },
        name:{
            type: String,
            trim:true,
            required: true,
            uppercase:true
        }

    },{collection:'names'}
)
module.exports =mongoose.model('names',nameSchema)