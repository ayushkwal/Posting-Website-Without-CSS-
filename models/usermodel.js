const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Save = mongoose.model('DatabaseName', userSchema);

module.exports = Save;