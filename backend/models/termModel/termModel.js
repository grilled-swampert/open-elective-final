const mongoose = require('mongoose');

const termSchema = new mongoose.Schema({
    termYear: { type: String, required: true },
    termType: { type: String, enum: ['Even', 'Odd'], required: true },
    semesters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Semester' }]
});
  
const Term = mongoose.model('Term', termSchema);
module.exports = Term;
  