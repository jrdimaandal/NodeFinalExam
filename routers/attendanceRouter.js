const express = require('express');
const { attendanceController } = require('../controllers');
const router = express.Router();

router.delete('/:attendanceid', attendanceController.deleteAttendance);

router.put('/:attendanceid', attendanceController.updateAttendance);

router.post('/', attendanceController.insertAttendance);

module.exports = router;