const { Router } = require('express');
const getUsersHandler = require('../handlers/User/getUsersHandler');
const { createUserHandler } = require('../handlers/User/createUserHandler');
const getUserHandler = require('../handlers/User/getUserHandler');
const updateUserHandler = require('../handlers/User/updateUserHandler');
const deleteUserHandler = require('../handlers/User/deleteUserHandler');
const loginUserHandler = require('../handlers/User/loginUserHandler');
const { upload } = require('../handlers/User/createUserHandler');
//invesments
const {
  getAllInvestmentHandler,
} = require('../handlers/Investments/getAllInvestmentsHandler');
const {
  createInvestmentHandler,
} = require('../handlers/Investments/createInvestmentHandler');
const {
  updateInvestmentsHandler,
} = require('../handlers/Investments/updateInvestmentHandler');
const {
  deleteInvestmentHandler,
} = require('../handlers/Investments/deleteInvestmentHandler');

const {
  validateCreateUser,
  validateUpdateUser,
  validateId,
  validateLogin,
} = require('../middlewares/User/RoutesValidation');

const userAccess = require('../middlewares/User/userAccess');

const userRouter = Router();

// userAccess(['entrepreneur', 'admin'])

userRouter.get('/', getUsersHandler);

//route invesments

userRouter.get('/investments', getAllInvestmentHandler);
userRouter.post('/investments', createInvestmentHandler);
userRouter.put('/investments/:id', updateInvestmentsHandler);
userRouter.delete('/investments/:id', deleteInvestmentHandler);

userRouter.get('/:id', validateId, getUserHandler);

userRouter.post(
  '/',
  upload.single('avatar'),
  validateCreateUser,
  createUserHandler
);


userRouter.put("/:id", upload.single('avatar'), validateUpdateUser, updateUserHandler);

userRouter.delete('/:id', validateId, deleteUserHandler);

userRouter.post('/login', validateLogin, loginUserHandler);

module.exports = userRouter;
