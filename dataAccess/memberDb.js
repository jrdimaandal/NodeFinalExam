const DataAccess = require('./db');
const _ = require('lodash');

class MemberDataAccess extends DataAccess {
  constructor () {
    super('members');
  }

  async searchMembers (name, status) {
    const dbContext = await this.dbContext;
    
    const records = dbContext
      .get(this.tableName)
      .value();
    
    const filtered = _.filter(records, function(item) {
      return item.name.toLowerCase().indexOf(name) > -1 && item.status.toLowerCase().indexOf(status) > -1;
    });

    return filtered;
    //   return dbContext
    //     .get(this.tableName)
    //     .find(u => u.name === name && u.status === status)
    //     .value();
  }

  async exportToExcel () {
    const user = await this.getByAny({
      propName: 'username',
      propValue: username
    });

    return user;
  }

  // async getMemberById (id) {
  //   const dbContext = await this.dbContext;
    
  //   const member = dbContext
  //     .get(this.tableName)
  //     .find({ id })
  //     .value();
    
  //   const attendance = dbContext
  //     .get('attendance')
  //     .find({ id : member.attendanceId })
  //     .value();
    
  //   const event = dbContext
  //     .get('event')
  //     .find({ id : attendance.eventId })
  //     .value();

  //   const result = dbContext
  //     .get(this.tableName)
  //     .find({ id })
  //     .assign({ eventAttendance })
  //     .write();

  //   return result;
  // }
}

module.exports = new MemberDataAccess();
