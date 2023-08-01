const { minAmountAll, maxAmountAll } = require('../../helpers/rangeAmount');

const rangeAmountAll = async () => {

 const amountMin = await minAmountAll();
  const amountMax = await maxAmountAll();
  const minAmountMinAll = amountMin.minAmountMin;
  const maxAmountMinAll = amountMin.maxAmountMin;
  const minAmountMaxAll = amountMax.minAmountMax;
  const maxAmountMaxAll = amountMax.maxAmountMax;

   return { minAmountMinAll, maxAmountMinAll, minAmountMaxAll, maxAmountMaxAll};
}
module.exports = { rangeAmountAll}