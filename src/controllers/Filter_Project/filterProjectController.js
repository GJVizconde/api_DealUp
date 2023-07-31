const { getAllProjects } = require("../Projects/getAllProjects");
//const { minAmountAll, maxAmountAll } = require('../../helpers/rangeAmount');

const filterController = async (
  category,
  search,
  minAmountMin,
  maxAmountMin,
  minAmounMax,
  maxAmountMax,
  order,
  attribute,
  typeAmount
) => {
  const allProject = await getAllProjects();

  // const amountMin = await minAmountAll();
  // const amountMax = await maxAmountAll();
  // const minAmountMinAll = amountMin.minAmountMin;
  // const maxAmountMinAll = amountMin.maxAmountMin;
  // const minAmountMaxAll = amountMax.minAmountMax;
  // const maxAmountMaxAll = amountMax.maxAmountMax;

  let filterAll = allProject;

  if (category) {
    filterAll = filterAll.filter((project) => {
      return category.every((categ) => project.category.includes(categ));
    });
  }

  if (minAmounMax) {
    filterAll = filterAll.filter((project) => {
      return project.max_amount >= minAmounMax;
    });
  }
  if (maxAmountMax) {
    filterAll = filterAll.filter((project) => {
      return project.max_amount <= maxAmountMax;
    });
  }

  if (minAmountMin) {
   
    filterAll = filterAll.filter((project) => {
     
        return project.min_amount >= minAmountMin;

    });
  }
  if (maxAmountMin) {
    filterAll = filterAll.filter((project) => {
      return project.min_amount <= maxAmountMin;
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

 // return {filterAll, minAmountMinAll, maxAmountMinAll, minAmountMaxAll, maxAmountMaxAll};
 return filterAll;
};

module.exports = { filterController };
