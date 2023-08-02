const { getAllProjects } = require("../Projects/getAllProjects");
//const { rangeAmountAll } = require('../Filter_Project/rangeAmountAll');

const filterController = async (
  category,
  search,
  minAmountMin,
  maxAmountMin,
  minAmountMax,
  maxAmountMax,
  order,
  attribute,
  typeAmount
) => {
  const allProject = await getAllProjects();

  let filterAll = allProject;

  //FILTER BY CATEGORY
  if (category) {
    filterAll = filterAll.filter((project) => category.every((categ) => project.category.includes(categ)));
  }

  //FILTER BY RANGE MINIMUM
  if (minAmountMin) {
   
    filterAll = filterAll.filter((project) => project.min_amount >= minAmountMin );
  }
  if (maxAmountMin) {
    filterAll = filterAll.filter((project) => project.min_amount <= maxAmountMin );
  }

    //FILTER BY RANGE MAXIMUM
  if (minAmountMax) {
    filterAll = filterAll.filter((project) => project.max_amount >= minAmountMax );
  }
  if (maxAmountMax) {
    filterAll = filterAll.filter((project) => project.max_amount <= maxAmountMax );
  }


  //ORDER BY AMOUNT MINIMUM
  if (typeAmount === "min") {
    if (order === "Asc" && attribute === "amount") {
      filterAll.sort((a, b) => a.min_amount - b.min_amount);
    }
    if (order === "Desc") {
      filterAll.sort((a, b) => b.min_amount - a.min_amount);
    }
  }
  //ORDER BY AMOUNT MAXIMUM
  if (typeAmount === "max") {
    if (order === "Asc" && attribute === "amount") {
      filterAll.sort((a, b) => a.max_amount - b.max_amount);
    }
    if (order === "Desc") {
      filterAll.sort((a, b) => b.max_amount - a.max_amount);
    }
  }

  //ORDER BY RATING
  if(order === "Asc" && attribute === "rating") {
      filterAll.sort((a,b) => a.dataValues.averageRating - b.dataValues.averageRating);
        }
  if(order === "Desc" && attribute === "rating") {
      filterAll.sort((a,b) =>  b.dataValues.averageRating - a.dataValues.averageRating);
 }

 //const range = await rangeAmountAll();

 // return {filterAll, range};
return filterAll;
};

module.exports = { filterController };
