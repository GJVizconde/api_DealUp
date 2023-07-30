require('dotenv').config();
const { NODE_ENV } = process.env;

const rootRouter = (mainRouter) => {
  mainRouter.get('/', (req, res) => {
    const greetingMessage =
      NODE_ENV === 'production'
        ? 'Hello, welcome Prod!'
        : 'Hello, how are you? dev';

    res.render('index', { greetingMessage });
  });

  return mainRouter;
};

module.exports = rootRouter;
