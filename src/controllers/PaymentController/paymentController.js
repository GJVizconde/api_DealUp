const mercadopago = require('mercadopago');
const { Investment } = require('../../db');
const createrOrder = async (req, res) => {
  const HOST = 'http://localhost:3000';
  const { contribution, ProjectId, UserId, comment } = req.body;
  const { MERCADOPAGO_TOKEN } = process.env;

  console.log({ contribution, ProjectId, UserId });
  const newInvestment = await Investment.create({
    contribution,
    comment,
    ProjectId,
    UserId,
  });
  console.log('new investment pending', newInvestment);
  try {
    mercadopago.configure({
      access_token: MERCADOPAGO_TOKEN,
    });

    const data = await mercadopago.preferences.create({
      items: [
        {
          title: '',
          unit_price: contribution,
          currency_id: 'USD',
          quantity: 1,
        },
      ],
      back_urls: {
        success: `https://start-bussines.vercel.app/investment-succes?InvestmentId=${newInvestment.id}`,
      },
      auto_return: 'approved',
      payment_methods: {
        installments: 1,
      },
      notification_url: `https://deal-up-api.onrender.com/payment/webhook?InvestmentId=${newInvestment.id}`,
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createrOrder };
