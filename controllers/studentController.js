// controllers/studentController.js
const Student = require('../models/student');

// Get all students
exports.getAllStudents = async (req, res) => {
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
    const { name, college, status, DSA_Final_Score, WebD_Final_Score, React_Final_Score } = req.body;
    const newStudent = new Student({
      name,
      college,
      status,
      DSA_Final_Score,
      WebD_Final_Score,
      React_Final_Score,
    });

    await newStudent.save();
    res.redirect('/students');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
