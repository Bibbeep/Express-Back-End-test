const router = require('express').Router();
const ScheduleController = require('../controllers/schedule');

router.get('/schedules', ScheduleController.getAll);
router.get('/schedules/:id', ScheduleController.getById);
router.post('/schedules', ScheduleController.create);
router.delete('/schedules/:id', ScheduleController.delete);
router.patch('/schedules/:id', ScheduleController.editById);

module.exports = router;