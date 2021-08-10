const { attendanceDataAccess } = require('../dataAccess');

const deleteAttendance = async (req, res, next) => {
    await attendanceDataAccess.delete(req.params.id);

    res.sendStatus(200);
  };

const updateAttendance = async (req, res, next) => {
    const id = req.params.id;
    const payload = req.body;

    await attendanceDataAccess.update(id, payload);

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