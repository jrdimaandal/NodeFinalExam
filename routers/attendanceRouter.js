const express = require('express');
const { attendanceController } = require('../controllers');
const router = express.Router();

router.delete('/:id', attendanceController.deleteAttendance);

router.put('/:id', attendanceController.updateAttendance);

router.post('/', attendanceController.insertAttendance);

module.exports = router;