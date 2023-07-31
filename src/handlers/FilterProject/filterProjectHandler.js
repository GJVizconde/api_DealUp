const {
  filterController,
} = require("../../controllers/Filter_Project/filterProjectController");
//const { getAllProjects } = require("../../controllers/Projects/getAllProjects");

const getFilterHandler = async (req, res) => {
  try {
    const {
      category,
      search,
      minAmountMin,
      maxAmountMin,
      minAmountMax,
      maxAmountMax,
      order,
      attribute,
      typeAmount,
    } = req.body;

console.log("estoy en handler filter");
console.log("min",minAmountMin);
console.log("min2",maxAmountMin);
console.log("max1", minAmountMax);
console.log("max2", maxAmountMax);

    const filterResult = await filterController(
      category,
      search,
      minAmountMin,
      maxAmountMin,
      minAmountMax,
      maxAmountMax,
      order,
      attribute,
      typeAmount
    );

    res.status(200).json(filterResult);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getFilterHandler };
