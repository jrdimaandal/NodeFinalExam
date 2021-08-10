const express = require('express');
const { eventController } = require('../controllers');
const router = express.Router();

router.get('/', eventController.getAllEvents);
router.get('/event/:id', eventController.getEventById);
router.get('/search/:eventname/:datestart/:dateend', eventController.searchEvents);
router.get('/export/:id', eventController.exportToExcel);

router.delete('/:id', eventController.deleteEvent);

router.put('/:id', eventController.updateEvent);

router.post('/', eventController.insertEvent);

module.exports = router;