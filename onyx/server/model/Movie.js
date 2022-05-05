const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    dir: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    p_url: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    ratings:{
        type: Array
    },
    score: {
        type: Number
    },
    db: {
        type: Number
    }
});

module.exports = Movies = mongoose.model('movies', MovieSchema);