const { Router } = require('express');
const getDateHandler = require('../handlers/testing/getDateHandler');

const testingRouter = Router();

testingRouter.get('/ping', getDateHandler);

module.exports = testingRouter;
