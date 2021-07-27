const DataAccess = require('./db');

class AttendanceDataAccess extends DataAccess {
  constructor () {
    super('events');
  }
}

module.exports = new AttendanceDataAccess();
