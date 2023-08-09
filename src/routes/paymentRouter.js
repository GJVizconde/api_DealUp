const { Router } = require ('express');
const {receiveWebhook }= require ('../controllers/PaymentController/webhookController');
const { createrOrder } = require('../controllers/PaymentController/paymentController');
//const projectRouter = require('./projectRouter');

const paymentRouter = Router();

paymentRouter.post('/create-order', createrOrder);

paymentRouter.get('/success', (req,res) => {
    console.log((req.query));
    res.send('success')
});

paymentRouter.get('/failure', (req,res) => res.send('failure'));
paymentRouter.get('/pending', (req,res) => res.send('pending'));

paymentRouter.post('/webhook', receiveWebhook);
module.exports = paymentRouter;