const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    branch: { type: String, required: true },
    division: { type: String, required: true },
    semester: { type: Number },
    contactNumber: { type: String, required: true },
    eligibility: { type: String, required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    enrollmentStatus: { type: String, enum: ['enrolled', 'not enrolled'], default: 'not enrolled' },
    coursesApprovalStatus: { type: String, enum: ['pending', 'approved', 'rejected'] },
    certificateStatus: { type: String, enum: ['pending', 'approved', 'rejected'] },
    status: { type: String, default: 'not-submitted' },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;