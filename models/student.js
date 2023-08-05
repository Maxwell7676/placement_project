// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  job_Role: { type: String, required: true },
  status: { type: String, required: true, enum: ['placed', 'not_placed'] },
  DSA_Final_Score: { type: Number, required: true },
  WebD_Final_Score: { type: Number, required: true },
  React_Final_Score: { type: Number, required: true },
  interview: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview' },
 
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
