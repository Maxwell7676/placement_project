// controllers/csvController.js
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const Student = require('../models/student');

// Render the CSV download page
exports.renderCSVPage = (req, res) => {
  res.render('csv');
};

// Generate and download CSV
exports.downloadCSV = async (req, res) => {
  try {
    const students = await Student.find().lean();

    const records = students.map((student) => ({
      'Student id': student._id,
      'Student name': student.name,
      'Student college': student.college,
      'Student status': student.status,
      'DSA Final Score': student.DSA_Final_Score,
      'WebD Final Score': student.WebD_Final_Score,
      'React Final Score': student.React_Final_Score,
    }));

    const csvWriter = createCsvWriter({
      path: 'student_data.csv',
      header: [
        { id: 'Student id', title: 'Student id' },
        { id: 'Student name', title: 'Student name' },
        { id: 'Student college', title: 'Student college' },
        { id: 'Student status', title: 'Student status' },
        { id: 'DSA Final Score', title: 'DSA Final Score' },
        { id: 'WebD Final Score', title: 'WebD Final Score' },
        { id: 'React Final Score', title: 'React Final Score' },
      ],
    });

    csvWriter.writeRecords(records).then(() => {
      res.download('student_data.csv', 'student_data.csv', (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error downloading CSV file');
        }
        fs.unlinkSync('student_data.csv'); // Delete the temporary CSV file
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating CSV');
  }
};
