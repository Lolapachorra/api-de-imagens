const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
    name: {type: String, required: true},
    src: {type: String, required: true}

});

module.exports = mongoose.model('picture', pictureSchema);