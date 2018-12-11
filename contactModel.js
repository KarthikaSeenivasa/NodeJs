let mongoose = require("mongoose");

var contactSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    created_date:{
        type: Date,
        default: Date.now
    }
});

var contact = module.exports = mongoose.model('contact',contactSchema);

module.exports.get = function(callBack, limit){
    contact.find(callBack).limit(limit);
}