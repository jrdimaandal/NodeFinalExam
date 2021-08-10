const { eventDataAccess } = require('../dataAccess');
const path  = require ('path');

const getAllEvents = async (req, res, next) => {
    const events = await eventDataAccess.getAll();
  
    res.send(events);
  };

const getEventById = async (req, res, next) => {
    const event = await eventDataAccess.getById(req.params.id);
  
    if (!event) {
        res.status(404).send('event does not exist');
    }
    res.send(event);
  };

const searchEvents = async (req, res, next) => {
    const { eventname, datestart, dateend } = req.params;
    const events = await eventDataAccess.searchEvents(eventname, datestart, dateend);
  
    if (!eventname && !datestart && ! dateend) {
      res.status(404).send('please provide search criteria');
    }

    res.send(events);
  };

const exportToExcel = async (req, res, next) => {
    const event = await eventDataAccess.getById(req.params.id);
  
    // const file = path.resolve(__dirname, '.tmp');
    // res.download(file);
    //'C:\\Users\\JRD\\Downloads\\' + 
    const startDate = event.Start.split(':')[0];

    res.download('./', event.eventName + '_' + startDate +'.xlsx', function(err) {
        console.log('test456'); //successfully prints to console
        if(err) { 
            console.log(err) //I'm assuming this is source of logged error
        } else {
            console.log("no error"); //doesn't print
        }
    });
  };

const deleteEvent = async (req, res, next) => {
    await eventDataAccess.delete(req.params.id);

    res.sendStatus(200);
  };

const updateEvent = async (req, res, next) => {
    const username = req.params.id;
    const payload = req.body;

    await eventDataAccess.update(username, payload);

    res.sendStatus(200);
  };

const insertEvent = async (req, res, next) => {
    const payload = req.body;
  
    const user = await eventDataAccess.insert(payload);
  
    res.status(201).send(user);
  };

module.exports = {
  getAllEvents,
  getEventById,
  searchEvents,
  exportToExcel,
  deleteEvent,
  updateEvent,
  insertEvent
};