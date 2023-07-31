// routes/studentRoutes.js
const express = require('express');
const router = express.Router();

const studentListController = require('../controllers/studentListController')


router.get('/', studentListController.getAllStudentList);

router.post('/', studentListController.addStudentList);

router.post('/delete/:id', studentListController.deleteList)




module.exports = router;