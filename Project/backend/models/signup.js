const mongoose1=require('mongoose');
const signup=new mongoose1.Schema(
    {
        email:{
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        confirmpassword:{
            type:String,
            required :true
        },
        address: {
            type: String,
            require: true
        },
        pincode: {
            type: Number,
            required: true
        },
        phonenumber: {
            type:Number,
            required : true
        }
    }
);

module.exports = mongoose1.model('signupdetails',signup);