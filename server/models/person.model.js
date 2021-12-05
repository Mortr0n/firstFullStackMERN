const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    // I like to format my model this way to allow for easy validation adds
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model('Person', PersonSchema);