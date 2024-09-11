const mongoose = require('mongoose');

const nptelSchema = new mongoose.Schema({
    discipline: { type: String, required: true },
    courseName: { type: String, required: true },
    institute: { type: String, required: true },
    duration: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    examDate: { type: Date, required: true },
    domain: { type: String, required: true },
    level: { type: String, required: true },
    courseLink: { type: String, required: true }
});

const NPTEL = mongoose.model('NPTEL', nptelSchema);
module.exports = NPTEL;
