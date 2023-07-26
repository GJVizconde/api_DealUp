//traigo me tabla de Project desde el db, pero tambien debo traer mas adelante la tabla de rating para relacionarlo
const { Project, User } = require('../../db');


const getAllProjects = async () => {

    return dataBaseProjects = await Project.findAll({
       
        include: {
            model: User,
            attributes: ['id', 'fullName'],
            through: {
                attributes: [],
            }
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
    });

    

};

module.exports = { getAllProjects }