const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const store2Schema = new Schema ({

    item:{
     type: String, 
     required: true,
    },
    quanity:{
     type: String, 
     required: true,
    },
} , {timestamps: true});



const store2 = mongoose.model('store2S', store2Schema);


module.exports = store2;




