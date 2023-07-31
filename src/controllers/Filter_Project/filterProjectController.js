const { getAllProjects } = require("../Projects/getAllProjects");
const { minAmountAll, maxAmountAll } = require('../../helpers/rangeAmount');

const filterController = async (
  category,
  search,
  minAmount1,
  minAmount2,
  maxAmount1,
  maxAmount2,
  order,
  attribute,
  typeAmount
) => {
  const allProject = await getAllProjects();

  const amountMin = await minAmountAll();
  const amountMax = await maxAmountAll();
  const minAmountMin = amountMin.minAmountMin;
  const maxAmountMin = amountMin.maxAmountMin;
  const minAmountMax = amountMax.minAmountMax;
  const maxAmountMax = amountMax.maxAmountMax;

  let filterAll = allProject;

  if (category) {
    filterAll = filterAll.filter((project) => {
      return category.every((categ) => project.category.includes(categ));
    });
  }

  if (maxAmount1) {
    filterAll = filterAll.filter((project) => {
      return project.max_amount >= maxAmount1;
    });
  }
  if (maxAmount2) {
    filterAll = filterAll.filter((project) => {
      return project.max_amount <= maxAmount2;
    });
  }

  if (minAmount1) {
    console.log(filterAll);
    filterAll = filterAll.filter((project) => {
      console.log("result", project.minAmount1 >= minAmount1);
        return project.min_amount >= minAmount1;

    });
  }
  if (minAmount2) {
    filterAll = filterAll.filter((project) => {
      return project.min_amount <= minAmount2;
    });
  }

  //ORDENAMIENTO POR AMOUNT MINIMUM
  if (typeAmount === "min") {
    if (order === "Asc" && attribute === "amount") {
      filterAll.sort((a, b) => a.min_amount - b.min_amount);
    }
    if (order === "Desc") {
      filterAll.sort((a, b) => b.min_amount - a.min_amount);
    }
  }
  //ORDENAMIENTO POR AMOUNT MAXIMUM
  if (typeAmount === "max") {
    if (order === "Asc" && attribute === "amount") {
      filterAll.sort((a, b) => a.max_amount - b.max_amount);
    }
    if (order === "Desc") {
      filterAll.sort((a, b) => b.max_amount - a.max_amount);
    }
  }

  //ORDENAMIENTO POR RATING
  // if(order === "Asc" && attribute === "rating") {
  //     filterAll.sort((a,b) => a.Rating -b.Rating);
  // }
  // if(order === "Desc") {
  //     filterAll.sort((a,b) => a.Rating -b.Rating);
  // }

  return {filterAll, minAmountMin,maxAmountMin, minAmountMax, maxAmountMax}
};

module.exports = { filterController };
