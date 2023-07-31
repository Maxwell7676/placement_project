// app.js
const express = require('express');
const mongoose = require('mongoose');
const cookie = require('cookie-parser')
const session = require('express-session'); 
const flash = require('connect-flash');


//const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000; // Change the port number if needed

// Set up MongoDB connection (Make sure you have MongoDB installed and running)
mongoose.connect('mongodb+srv://ravi:1234@cluster0.872hpfd.mongodb.net/placement_cell?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



//static file
app.use(express.static('public'));
app.use(cookie());

app.use(
  session({
    secret: '1432', // Replace with your own secret key for session encryption
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

// Body parser middleware (to parse incoming JSON data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views'); // Set the views directory

// Serve the home page directly
app.get('/', async (req, res) => {
  res.render('home')
})

// Routes
const dashboard = require('./routes/dashboard');
const studentRoutes = require('./routes/studentRoutes');
const studentListRoutes = require('./routes/studentListRouter')

const csvRoutes = require('./routes/csvRoutes');
const userRoutes = require('./routes/userRoutes');




app.use('/dashboard', dashboard);
app.use('/students', studentRoutes);
app.use('/studentList', studentListRoutes)

app.use('/csv', csvRoutes);
app.use('/user', userRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
