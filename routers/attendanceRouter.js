const express = require('express');
const { attendanceController } = require('../controllers');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/member/:username', userController.getUserByUsername);
router.get('/member/email/:emailAddress', userController.getUserByEmailAddress);

router.delete('/member/:username',
                userController.validateUsernameDoesExists, 
                userController.deleteUser);

router.put('/member/:username', 
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