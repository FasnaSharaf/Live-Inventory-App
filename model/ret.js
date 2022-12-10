const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const retailerSchema = new Schema ({
    unique_id: {
        type: Number,
        required: true,
    },
    item:{
     type: String, 
     required: true,
    },
    quanity:{
     type: String, 
     required: true,
    },
} , {timestamps: true});



const retailer = mongoose.model('retailerS', retailerSchema);


module.exports = retailer;




