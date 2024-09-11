const mongoose = require('mongoose');

const courseraSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    averageHours: { type: Number, required: true },
    courseraHours: { type: Number, required: true },
    difficulty: { type: String, required: true },
    university: { type: String, required: true },
    majorDomain: { type: String, required: true },
    domain: { type: String, required: true },
    courseLink: { type: String, required: true }
}); 

const Coursera = mongoose.model('Coursera', courseraSchema);
module.exports = Coursera;