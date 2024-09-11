const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    category: { type: String, enum: ['NPTEL', 'Coursera', 'College Offered'], required: true },
    term: { type: mongoose.Schema.Types.ObjectId, ref: 'Term', required: true },
    semester: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'categoryRef' }],
});

courseSchema.virtual('categoryRef').get(function() {
    switch (this.category) {
        case 'NPTEL':
            return 'NPTELCourse';
        case 'Coursera':
            return 'CourseraCourse';
        case 'College Offered':
            return 'CollegeOfferedCourse';
        default:
            return null;
    }
});

const Courses = mongoose.model('Course', courseSchema);
module.exports = { Courses };
