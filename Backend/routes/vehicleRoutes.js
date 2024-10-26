const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/VehicleController');

router.post('/entry', VehicleController.registerEntry);
router.post('/exit', VehicleController.registerExit);

module.exports = router;
