const express = require('express');
const { memberController } = require('../controllers');
const router = express.Router();

router.get('/', memberController.getAllMembers);
router.get('/:memberid', memberController.getMemberById);
router.get('/search?name=&status=', memberController.searchMembers);

router.delete('/member/:memberid', memberController.deleteMember);

router.put('/:memberid', memberController.updateMember);

router.post('/', memberController.insertMember);

module.exports = router;