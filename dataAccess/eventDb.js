const DataAccess = require('./db');
const _ = require('lodash');

class EventDataAccess extends DataAccess {
  constructor () {
    super('events');
  }

  async searchEvents (eventname, datestart, dateend) {
    const dbContext = await this.dbContext;
    
    const records = dbContext
      .get(this.tableName)
      .value();
    
    const filtered = _.filter(records, function(item) {
      return item.eventName.toLowerCase().indexOf(eventname) > -1 || item.Start.toLowerCase().indexOf(datestart) > -1 || item.End.toLowerCase().indexOf(dateend) > -1;
    });

    return filtered;
  }
}

module.exports = new EventDataAccess();
