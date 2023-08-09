const mercadopago = require("mercadopago");

const { Investment, Project } = require("../../db");
const receiveWebhook = async (req, res) => {
  const payment = req.query;
  console.log("Webhook", payment, "Webhook");
  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(" info de data mercado pago.paymant.get", data);

      console.log(data.response.status);

      const investment = await Investment.findByPk(payment.InvestmentId);
      investment.status =
        data.response.status === "approved" ? "approved" : "refused";
      investment.payment_time =
        data.response.status === "approved"
          ? data.response.date_approved
          : "Payment was not succesfully";
      investment.id_payment_mercadopago = payment["data.id"];
      await investment.save();
      const project = await Project.findByPk(investment.ProjectId);
      project.collected_amount +=
        data.response.status === "approved" ? investment.contribution : 0;
      await project.save();

      /* console.log("investment database", investment);
      console.log(project); */
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { receiveWebhook };
