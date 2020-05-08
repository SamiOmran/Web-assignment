const mongoose = require("mongoose");

const calendarSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    Stime: {
        type: String,
        required: true
    },

    Etime: {
        type: String,
        required: true
    },
    tage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Event', calendarSchema);


