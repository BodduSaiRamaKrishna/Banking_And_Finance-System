const mongoose1=require('mongoose');
const checkout=new mongoose1.Schema(
    {
        name:{
            type:String,
            require:true
        },
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
        state:{
            type:String,
            require:true
        },
        pincode: {
            type: Number,
            required: true
        },
        phonenumber: {
            type:Number,
            required : true
        },
        accountnumber:{
            type:Number,
            required:true
        }
    }
);

module.exports = mongoose1.model('checkoutdetails',checkout);