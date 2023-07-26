//traigo me tabla de Project desde el db, pero tambien debo traer mas adelante la tabla de rating para relacionarlo
const { Project } = require('../../db');


const getAllProjects = async () => {

    return dataBaseProjects = await Project.findAll();

    

};

module.exports = { getAllProjects }