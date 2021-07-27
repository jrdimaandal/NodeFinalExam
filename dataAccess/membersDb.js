const DataAccess = require('./db');

class MemberDataAccess extends DataAccess {
  constructor () {
    super('events');
  }

  async searchMembers (emailAddress) {
    const user = await this.getByAny({
      propName: 'emailAddress',
      propValue: emailAddress
    });

    return user;
  }
}

module.exports = new MemberDataAccess();
