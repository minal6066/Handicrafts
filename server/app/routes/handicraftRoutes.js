const handicraftController = require('../controller/handicrafts.js');
const express = require('express');
const router = express.Router();

router 
    .route('/:type')
    .post(handicraftController.addHandicraft)
    .get(handicraftController.getHandicrafts)

router
    .route('/one/:handicraftId')
    .get(handicraftController.getOneHandicraft)
    .delete(handicraftController.deleteHandicraft)
    .patch(handicraftController.editHandicraft);

module.exports = router;