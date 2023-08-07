const mercadopago = require('mercadopago');
const { Investment } = require('../../db');
const createrOrder = async (req,res) => {
const HOST ="http://localhost:3001";
    const { contribution, ProjectId, UserId } = req.body;

    const newInvestment = await createInvestment(contribution, comment, UserId, ProjectId);
    console.log("new investment pending",newInvestment);
    try {
        mercadopago.configure({
            access_token:"",
        });

        const result = await mercadopago.preferences.create({
            items:[
               {
                 title: "",
                unit_price: contribution,
                currency_id:'USD',
                quantity: 1,
            }
            ],
            back_urls: {
                success: `${HOST}/success?ProjectId=${newInvestment.id}`,
                failure: `${HOST}/failure`,
                pending: `${HOST}/pending`,
            },
            auto_return: 'approved',
            payment_methods: {
                installments: 1,
            },
            notification_url: "https://2349-201-252-167-59.ngrok.io/webhook",
        });
        console.log(result);
        res.send(result.body);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }

};

module.exports = { createrOrder }