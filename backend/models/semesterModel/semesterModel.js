const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema({
    semesterNumber: { type: String, required: true },
    category: { type: String, required: true },
    elective: { type: String, required: true },
    syllabusFile: { type: String },
    studentsList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    students: { type: String },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    certificateSubmissionDate: { type: Date, required: true },
    broadcastMessage: { type: String },
});
  
const Semester = mongoose.model('Semester', semesterSchema);
module.exports = Semester;
  