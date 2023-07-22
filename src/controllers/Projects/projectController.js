const { getAllProjects } = require('./getAllProjects')

const { Project, User } = require('../../db');


//NAME
const searchProjectByName = async (name) => {
    
    const allProjectDb = await getAllProjects(); 

    const nameProject = allProjectDb.filter(proj => proj.name.toLowerCase().includes(name.toLowerCase()));

    return (nameProject.length) ? nameProject : `The ${name} project doesn't exist`;

};


//ID

const searchProjectById = async (id) => {

console.log("controllers id:", id);

// const infoProject = await getAllProjects();

// const project = infoProject.find((proje) => proje.id == id);

const project = await Project.findAll({
    where: { 
        id
    }, 
    include:{
        model:User,
        attributes: [
            "id",
            "name",
            "email",
              "rol",
          ],
          through: {
            attributes: [],
          },
    }
});

if(project) {
    return project;
} else {
    return `ID project not found, ID = ${id}`
}


}


module.exports = { searchProjectByName, searchProjectById }