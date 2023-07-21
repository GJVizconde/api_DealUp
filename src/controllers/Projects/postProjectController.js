const { Project } = require('../../db');


const createProject = async (name, description, min_amount, max_amount, goal_amount, initial_date, deadline, gallery, category, status) => {



const newProject = await Project.create({
    name,
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

return newProject;

};

module.exports = { createProject }