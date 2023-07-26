// controllers/resultController.js
const Result = require('../models/result');

// Get all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find().populate('student').populate('interview');
    res.render('results', { results });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Allocate a student to an interview
exports.allocateStudent = async (req, res) => {
  try {
    const { student, interview, result } = req.body;
    const newResult = new Result({ student, interview, result });

    await newResult.save();
    res.redirect('/results');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
