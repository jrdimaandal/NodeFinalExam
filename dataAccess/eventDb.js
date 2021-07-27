const DataAccess = require('./db');

class EventDataAccess extends DataAccess {
  constructor () {
    super('events');
  }

  async searchEvents () {
    const user = await this.getByAny({
      propName: 'emailAddress',
      propValue: emailAddress
    });

    return user;
  }

  async exportToExcel () {
    const user = await this.getByAny({
      propName: 'username',
      propValue: username
    });

    return user;
  }
}

module.exports = new EventDataAccess();
