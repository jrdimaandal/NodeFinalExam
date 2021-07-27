const { eventDataAccess } = require('../dataAccess');

const getAllEvents = async (req, res, next) => {
    const users = await eventDataAccess.getAll();
  
    res.send(users);
  };

const getEventById = async (req, res, next) => {
    const user = await eventDataAccess.getById(req.params.id);
  
    if (!user) {
        res.status(404).send('event does not exist');
    }
    res.send(user);
  };

const searchEvents = async (req, res, next) => {
    const user = await eventDataAccess.searchEvents(req.params.emailAddress);
  
    res.send(user);
  };

const exportToExcel = async (req, res, next) => {
    const user = await eventDataAccess.exportToExcel(req.params.emailAddress);
  
    res.send(user);
  };

const deleteEvent = async (req, res, next) => {
    await eventDataAccess.delete(req.params.username);

    res.sendStatus(200);
  };

const updateEvent = async (req, res, next) => {
    const username = req.params.username;
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