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
const confirmRegisterHandler = require('../handlers/User/confirmRegisterHandler');

//forgotPassword
const sendEmailRecoveryHandler = require('../handlers/User/sendEmailRecoveryHandler');
const resetPasswordHandler = require('../handlers/User/resetPasswordHandler');

//checkUser
const checkUserHandler = require('../handlers/User/checkUserHandler');

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

//? /REGISTER CONFIRM EMAIL
userRouter.post('/register', createRegisterHandler);
userRouter.patch('/register/confirm/:token', confirmRegisterHandler);

//? /FORGOT
userRouter.post('/forgotPassword', sendEmailRecoveryHandler);
userRouter.patch('/resetPassword/:token', resetPasswordHandler);

//? /CHECK
userRouter.get('/check', checkUserHandler);

//? /USER ORIGINAL CRUD
userRouter.get('/', getUsersHandler);
userRouter.get('/:id', validateId, getUserHandler);
userRouter.post(
  '/',
  upload.single('avatar'),
  validateCreateUser,
  createUserHandler
);
userRouter.patch(
  '/:id',
  upload.single('avatar'),
  validateUpdateUser,
  updateUserHandler
);
userRouter.delete('/:id', validateId, deleteUserHandler);
userRouter.post('/login', validateLogin, loginUserHandler);

module.exports = userRouter;
