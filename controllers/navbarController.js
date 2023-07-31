const navbar = require('../controllers/studentListController');


exports.navbarArray = async (req, res)=>{

    const navData = await navbar.getAllStudentList.find();

    console.log(navData);

    res.render('._header', { navData});

}