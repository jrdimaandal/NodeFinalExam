const { attendanceDataAccess } = require('../dataAccess');

const deleteAttendance = async (req, res, next) => {
    await attendanceDataAccess.delete(req.params.username);

    res.sendStatus(200);
  };

const updateAttendance = async (req, res, next) => {
    const username = req.params.username;
    const payload = req.body;

    await attendanceDataAccess.update(username, payload);

    res.sendStatus(200);
  };

const insertAttendance = async (req, res, next) => {
    const payload = req.body;
  
    const user = await attendanceDataAccess.insert(payload);
  
    res.status(201).send(user);
  };

module.exports = {
  deleteAttendance,
  updateAttendance,
  insertAttendance
};