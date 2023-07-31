// dashboard router
const express = require('express');
const router = express.Router();
const studentListController = require('../controllers/studentListController');

// router.get('/', (req, res)=>{
//     res.render('dashboard');
// }); 

router.get('/:id', studentListController.Dashboard);
router.get('/', studentListController.updateDashboard);
router.post('/delete/:id', studentListController.deleteListDashboard);



 module.exports = router;