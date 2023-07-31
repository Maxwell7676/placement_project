const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')

// Sign in routes
router.get('/signIn', userController.signIn);
router.post('/signIn', userController.verifySignIn);


// Sign up routes
router.get('/signUp', userController.signUp);
router.post('/signUp', userController.signUpDoc);



// Sign out route
router.get('/signOut', userController.signOut);

module.exports = router;
