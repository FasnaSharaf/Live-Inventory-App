const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registrationSchema = new Schema ({
    id: {
        type: Number,
        required: true,
    },
    shopName:{
        type: String, 
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
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




