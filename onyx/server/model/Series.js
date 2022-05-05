const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeriesSchema = new Schema({
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
    links: {
        type: Array,
        required: true
    },
    ep: {
        type: Number
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

module.exports = Series = mongoose.model('series', SeriesSchema);