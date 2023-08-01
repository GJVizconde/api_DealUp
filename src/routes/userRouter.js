const { Router } = require('express');
const getUsersHandler = require('../handlers/User/getUsersHandler');
const {
  upload,
  createUserHandler,
} = require('../handlers/User/createUserHandler');
const getUserHandler = require('../handlers/User/getUserHandler');
const updateUserHandler = require('../handlers/User/updateUserHandler');
const deleteUserHandler = require('../handlers/User/deleteUserHandler');
const loginUserHandler = require('../handlers/User/loginUserHandler');
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

//register
const createRegisterHandler = require('../handlers/User/createRegisterHandler');

const {
  validateCreateUser,
  validateUpdateUser,
  validateId,
  validateLogin,
} = require('../middlewares/User/RoutesValidation');

const userAccess = require('../middlewares/User/userAccess');

const userRouter = Router();

// userAccess(['entrepreneur', 'admin'])

//? /INVESTMENTS
userRouter.get('/investments', getAllInvestmentHandler);
userRouter.post('/investments', createInvestmentHandler);
userRouter.put('/investments/:id', updateInvestmentsHandler);
userRouter.delete('/investments/:id', deleteInvestmentHandler);

//? /REGISTER
userRouter.post('/register', createRegisterHandler);

//? /USER ORIGINAL CRUD
userRouter.get('/', getUsersHandler);
userRouter.get('/:id', validateId, getUserHandler);
userRouter.post(
  '/',
  upload.single('avatar'),
  validateCreateUser,
  createUserHandler
);
userRouter.patch('/:id', validateUpdateUser, updateUserHandler);
userRouter.delete('/:id', validateId, deleteUserHandler);
userRouter.post('/login', validateLogin, loginUserHandler);

module.exports = userRouter;
