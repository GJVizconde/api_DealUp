const mercadopago = require('mercadopago');
//const { createInvestment } = require('../../controllers/Investment/createInvestmentController');
 const { Investment } = require('../../db');
const receiveWebhook = async ( req, res) => {
    const payment = req.query;
console.log(payment);
    try {
        
        const userId = payment.userId;
        const projectId = payment.projectId;
        const amount = payment.amount;

        if(payment.type === "payment") {
            const data = await mercadopago.payment.get(payment.id);
            console.log(" info de data mercado pago.paymant.get",data);

            // Crear la inversión utilizando los datos extraídos
            const contribution = amount;
            const comment = '';
            const status = 'completed';
            const newInvestment = await createInvestment(contribution, comment, userId, projectId, status);
        }

res.status(204).send(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message});
    }
};

module.exports =  {receiveWebhook} ;