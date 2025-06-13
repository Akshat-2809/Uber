const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required:true,
            minlength:[3, "min 3 characters"],
        },
        lastname:{
            type: String,
            minlength:[3, "min 3 characters"],
        }

    },
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
        
    }



})