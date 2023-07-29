const { getAllProjects } = require('../Projects/getAllProjects');

const filterController = async (category, search,  minAmount, maxAmount, order, attribute) => {

const allProject = await getAllProjects();
let filterAll = allProject;


if(category){
    filterAll = filterAll.filter(project => {
        return category.every(categ => project.category.includes(categ))
});
}

if(maxAmount ) {
    filterAll = filterAll.filter(project => {
        return project.max_amount <= maxAmount;
    });
}

if(minAmount) {
    filterAll = filterAll.filter(project => {
        return project.min_amount >= minAmount;
    });
}

//ORDENAMIENTO POR AMOUNT
if(order === "Asc" && attribute === "amount") {
    filterAll.sort((a,b) => a.min_amount -b.min_amount);
}
if(order === "Desc") {
    filterAll.sort((a,b) => a.max_amount -b.max_amount);
}

//ORDENAMIENTO POR RATING
// if(order === "Asc" && attribute === "rating") {
//     filterAll.sort((a,b) => a.Rating -b.Rating);
// }
// if(order === "Desc") {
//     filterAll.sort((a,b) => a.Rating -b.Rating);
// }




return filterAll;



};

module.exports = { filterController }



// const getAllDogs = async() => {
//     const dbInfo = await getDbInfo();
//     const apiInfo = await getApiInfo();
//     return [...dbInfo, ...apiInfo];
// }

// const filterByCategory = filterAll.filter( project => {
//     return category.every(categ => project.category.includes(categ))
// });


// const searchBar = filterByCategory.filter((project) => {
//     const name = project.name.toLowerCase();
//     const description = project.description.toLowerCase();

//     const searchWord = search.toLowerCase();
    
//     return name.includes(searchWord) || description.includes(searchWord);
// });