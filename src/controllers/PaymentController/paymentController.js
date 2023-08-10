const mercadopago = require('mercadopago');
const { Investment } = require('../../db');
const createrOrder = async (req, res) => {
  const HOST = 'http://localhost:3000';
  const { contribution, ProjectId, UserId, comment } = req.body;

  console.log({ contribution, ProjectId, UserId });
  try {
    const newInvestment = await Investment.create({
      contribution,
      comment,
      ProjectId,
      UserId,
    });
    console.log('new investment pending', newInvestment);

    mercadopago.configure({
      access_token:
        'TEST-3380620890938082-080521-71b737ea9b6f8b8db1ea2949c6d6e778-1443137702',
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
