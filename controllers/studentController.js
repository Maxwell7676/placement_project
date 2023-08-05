// controllers/studentController.js
const Student = require('../models/student');

// Get all students
exports.studentForm = async (req, res) => {
  try {
    const students = await Student.find();
    res.render('students', { students });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Add a new student
exports.addStudent = async (req, res) => {
  try {
    const { name, college, job_Role, status, DSA_Final_Score, WebD_Final_Score, React_Final_Score } = req.body;
    const newStudent = new Student({
      name,
      college,
      job_Role,
      status,
      DSA_Final_Score,
      WebD_Final_Score,
      React_Final_Score,
    });

    const data = await newStudent.save();
    console.log(data);
    res.redirect('/students');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};


