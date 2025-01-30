const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    UpdateDate:{
        type:Date,
        require:true,
        default:Date.now(),
    }

});

module.exports = mongoose.model('signupModel',signupSchema);