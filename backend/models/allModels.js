const mongoose = require('mongoose');

const courseraSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    averageHours: { type: Number, required: true },
    courseraHours: { type: Number, required: true },
    university: { type: String, required: true },
    domain: { type: String, required: true },
    courseLink: { type: String, required: true }
}); 

const Coursera = mongoose.model('Coursera', courseraSchema);
module.exports = Coursera;

const nptelSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    discipline: { type: String, required: true },
    courseName: { type: String, required: true },
    institute: { type: String, required: true },
    duration: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    domain: { type: String, required: true },
    level: { type: String, required: true },
    courseLink: { type: String, required: true }
});

const NPTEL = mongoose.model('NPTEL', nptelSchema);
module.exports = NPTEL;

const clgSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseId: { type: String, required: true },
    faculty: { type: String, required: true },
    emailId: { type: String, required: true },
    branch: { type: String, required: true },
    syllabusFile: { type: String, required: true }, 
 });
 
const College = mongoose.model('College', clgSchema);
module.exports = College;

const courseSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    category: { type: String, enum: ['NPTEL', 'Coursera', 'College Offered'], required: true },
    term: { type: mongoose.Schema.Types.ObjectId, ref: 'Term', required: true },
    semester: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true }
});
  
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

const enrollmentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }],
    status: { type: String, enum: ['pending', 'approved', 'disapproved', 'enrolled'], default: 'pending' }
  });
    
  const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
  module.exports = Enrollment;

const termSchema = new mongoose.Schema({
    termYear: { type: String, required: true },
    termType: { type: String, enum: ['even', 'odd'], required: true },
    semesters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Semester' }]
});
  
const Term = mongoose.model('Term', termSchema);
module.exports = Term;


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'faculty', 'student'], required: true },
    branch: { type: String, required: function() { return this.role === 'student'; } },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;

  const semesterSchema = new mongoose.Schema({
    term: { type: mongoose.Schema.Types.ObjectId, ref: 'Term', required: true },
    semesterNumber: { type: String, required: true },
    category: { type: String, required: true },
    elective: { type: String, required: true },
    branch: { type: String, required: true },
    syllabus: { type: String },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});
  
const Semester = mongoose.model('Semester', semesterSchema);
module.exports = Semester;
  