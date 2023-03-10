const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname :{
        type:String,
        default : null,
    },
    lastname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    token:{
        type:String
    }
})

module.exports = mongoose.model('user',userSchema);