const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registrationSchema = new Schema ({

    shopName:{
        type: String, 
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
} , {timestamps: true});



const retailerRegister = mongoose.model('retailerReG', registrationSchema);


module.exports = retailerRegister;




