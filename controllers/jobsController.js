// controllers/jobsController.js
const axios = require('axios');

// Fetch jobs from the external API (example: GitHub Jobs API)
exports.getJobs = async (req, res) => {
  try {
    const apiUrl = 'https://jobs.github.com/positions.json';
    const response = await axios.get(apiUrl, { params: { description: 'node.js' } }); // Change the description to 'react' for React jobs
    const jobs = response.data;
    res.render('jobs', { jobs });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching jobs');
  }
};
