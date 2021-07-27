const express = require('express');
const { eventsController } = require('../controllers');
const router = express.Router();

router.get('/', eventsController.getAllEvents);
router.get('/:eventid', eventsController.getEventById);
router.get('/search?eventname=&datestart=&dateend=', eventsController.searchEvents);
router.get('/export?eventid', eventsController.exportToExcel);

router.delete('/:eventid', eventsController.deleteEvent);

router.put('/:eventid', eventsController.updateEvent);

router.post('/', eventsController.insertEvent);

module.exports = router;