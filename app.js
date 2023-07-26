// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000; // Change the port number if needed

// Set up MongoDB connection (Make sure you have MongoDB installed and running)
mongoose.connect('mongodb://127.0.0.1:27017/placement_cell', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
});

// Body parser middleware (to parse incoming JSON data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views'); // Set the views directory

// Routes
// const studentRoutes = require('./routes/studentRoutes');
// const interviewRoutes = require('./routes/interviewRoutes');
// const resultRoutes = require('./routes/resultRoutes');
// const jobsRoutes = require('./routes/jobsRoutes');
// const csvRoutes = require('./routes/csvRoutes');

// app.use('/students', studentRoutes);
// app.use('/interviews', interviewRoutes);
// app.use('/results', resultRoutes);
// app.use('/jobs', jobsRoutes);
// app.use('/csv', csvRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
