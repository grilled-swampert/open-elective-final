const mongoose = require('mongoose');

const clgSchema = new mongoose.Schema({
   offeringDepartment: { type: String, required: true },
   courseID: { type: String, required: true },
   courseName: { type: String, required: true },
   courseLink: { type: String, required: true },
   faculty: { type: String, required: true },
   emailId: { type: String, required: true },
   EXCP: { type: Boolean, required: true },
   ETRX: { type: Boolean, required: true },
   COMP: { type: Boolean, required: true },
   IT: { type: Boolean, required: true },
   AIDS: { type: Boolean, required: true },
   MECH: { type: Boolean, required: true },
   RAI: { type: Boolean, required: true },
   CCE: { type: Boolean, required: true },
   VDT: { type: Boolean, required: true },
   CSBS: { type: Boolean, required: true },
});

const College = mongoose.model('College', clgSchema);
module.exports = College;