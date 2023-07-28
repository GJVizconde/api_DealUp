const { getAllProjects } = require('../Projects/getAllProjects');

const filterController = async (category) => {

const allProject = await getAllProjects();

const filter = await allProject.filter( project => {
    return category.every(categ => project.category.includes(categ))
});
return filter;

};

module.exports = { filterController }