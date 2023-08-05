// controllers/studentListController.js
const Student = require('../models/student');

// Get all students
exports.getAllStudentList = async (req, res) => {
  try {
    const studentsList = await Student.find();
    //console.log(studentsList);
    res.render('studentList', { studentsList : studentsList });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};


// Add a new student
exports.addStudentList = async (req, res) => {
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
    res.redirect('/studentList');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};



//delete studentlist

exports.deleteList = async (req, res)=>{

try {

  const deleteStudentList = await Student.findByIdAndDelete(req.params.id);

  console.log(deleteStudentList);

  res.redirect('/studentList');
  
} catch (error) {
  console.log(error);
}

}





//selected student for interview interview
const Result = [];
exports.Dashboard = async (req, res) => {
  try {
    const AllStudent = await Student.find();
    if (AllStudent.length === 0) {
      console.log("No students found.");
      return res.render('dashboard', { Result: [] }); 
     
    }
    const data = await Student.findById(req.params.id);
   
      for (let i = 0; i < AllStudent.length; i++) {
        if (AllStudent[i]._id.toString() === data._id.toString()) {
          
          Result.push(data);
        
        }
      }

    

    res.cookie('CookieDash', Result);

    res.render('dashboard', { Result });
   
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};



//update dashboard
exports.updateDashboard = async (req, res)=>{
  try {

    //  const updateDash = await Student.findByIdAndUpdate(req.params.id, req.body);
    const data = req.cookies.CookieDash || [];

    // Check if there's any data in the cookie
    if (data.length === 0) {
      console.log("No students found in the cookie.");
    }

    res.render('dashboard', { Result: data });

    

  } catch (error) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}



exports.deleteListDashboard = async (req, res) => {
  try {
    const studentId = req.params.id;

    // Assuming Result is the array containing the students data stored in cookies
    const data = req.cookies.CookieDash || [];
    const updatedData = data.filter((student) => student._id.toString() !== studentId);

    // Set the updated data back to the cookies
    res.cookie('CookieDash', updatedData);

    // Redirect to the dashboard after successful deletion
    res.redirect('/dashboard');
  } catch (error) {
    console.log(error);
    res.redirect('/dashboard'); // Handle error by redirecting to the dashboard
  }
}
















