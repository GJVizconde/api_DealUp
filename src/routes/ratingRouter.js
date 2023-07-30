const { Router } = require('express');
const getRatingsHandler = require('../handlers/Rating/getRatingsHandler');
const getRatingHandler = require('../handlers/Rating/getRatingHandler');
const createRatingHandler = require('../handlers/Rating/createRatingHandler');
const updateRatingHandler = require('../handlers/Rating/updateRatingHandler');
const deleteRatingHandler = require('../handlers/Rating/deleteRatingHandler');

const deleteRating = require('../controllers/Rating_Project/deleteRating');
const updateRating = require('../controllers/Rating_Project/updateRating');
const getAllRatings = require('../controllers/Rating_Project/getAllRatings');
const getRatingById = require('../controllers/Rating_Project/getRatingById');

// const {
//   validateCreateUser,
//   validateUpdateUser,
//   validateId,
// } = require('../middlewares/User/index');

const ratingRouter = Router();

ratingRouter.post('/', createRatingHandler);

ratingRouter.get('/', getRatingsHandler);

ratingRouter.get('/:id', getRatingHandler);

ratingRouter.put('/:id', updateRatingHandler);

ratingRouter.delete('/:id', deleteRatingHandler);

module.exports = ratingRouter;
