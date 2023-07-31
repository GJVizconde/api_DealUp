const {
  filterController,
} = require("../../controllers/Filter_Project/filterProjectController");
const { getAllProjects } = require("../../controllers/Projects/getAllProjects");

const getFilterHandler = async (req, res) => {
  try {
    const {
      category,
      search,
      minAmount1,
      minAmount2,
      maxAmount1,
      maxAmount2,
      order,
      attribute,
      typeAmount,
    } = req.body;

    const filterResult = await filterController(
      category,
      search,
      minAmount1,
      minAmount2,
      maxAmount1,
      maxAmount2,
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
