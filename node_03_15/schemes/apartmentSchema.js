const mongoose = require("mongoose");
const Schema = mongoose.Schema

const apartmentSchema = new Schema({
    photo: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start: {
        type: Array,
        required: true
    },
    end: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('apartmentSchema', apartmentSchema)