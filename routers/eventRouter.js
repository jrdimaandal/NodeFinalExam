const express = require('express');
const { eventsController } = require('../controllers');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/event/:username', userController.getUserByUsername);
router.get('/event/email/:emailAddress', userController.getUserByEmailAddress);

router.delete('/event/:username',
                userController.validateUsernameDoesExists, 
                userController.deleteUser);

router.put('/event/:username', 
                userController.validateUsernameDoesExists,
                userController.validateBodyHasNoUsername,
                userController.validateEmailAlreadyExists,
                userController.validateEmail,
                userController.updateUser);

router.post('/',
                userController.validateEmail,
                userController.validateUsernameAlreadyExists,
                userController.validateEmailAlreadyExists,
                userController.insertUser);

module.exports = router;