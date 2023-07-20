const { Project } = require('../../db');


const createProject = async (name, description, min_amount, max_amount, goal_amount, initial_date, deadline, gallery, category, status) => {

console.log("estoy en controllers");
console.log(name, description, min_amount, max_amount, goal_amount, initial_date, deadline, gallery, category, status);

formattedName = name.charAt(0).toUpperCase() + name.slice(1);

const existingProject = await Project.findOne({
    where: { name: formattedName }
});

if( existingProject ) {
    return "The project name already exists. Cannot create duplicate.";
}

const newProject = await Project.create({
    name:formattedName,
    description,
    min_amount,
    max_amount,
    goal_amount,
    initial_date,
    deadline,
    gallery,
    category,
    status
})

return "Proyect created successfully";

};

module.exports = { createProject }