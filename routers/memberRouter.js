const express = require('express');
const { memberController } = require('../controllers');
const router = express.Router();

router.get('/', memberController.getAllMembers);
router.get('/member/:id', memberController.getMemberById);
router.get('/search/:name/:status', memberController.searchMembers);

router.delete('/member/:id', memberController.deleteMember);

router.put('/:id', memberController.updateMember);

router.post('/', memberController.insertMember);

module.exports = router;