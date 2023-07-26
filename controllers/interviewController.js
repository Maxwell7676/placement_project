// controllers/interviewController.js
const Interview = require('../models/interview');

// Get all interviews
exports.getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.render('interviews', { interviews });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Add a new interview
exports.addInterview = async (req, res) => {
  try {
    const { company, date } = req.body;
    const newInterview = new Interview({ company, date });

    await newInterview.save();
    res.redirect('/interviews');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
