const mongoose = require('mongoose')
const modelAdress = new mongoose.Schema({
    title: {type: String, minlength: 3, required: true, maxlength: 100},
    subtitle: {type: String, minlength: 3, maxlength: 100 , required: true},
    img: {type: String, minlength: 3, maxlength: 100, required: true},
    lat: {type: String, },
    long: {type: String, },
});

module.exports = mongoose.model('Adress', modelAdress);