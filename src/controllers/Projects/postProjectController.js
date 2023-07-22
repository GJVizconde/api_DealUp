const { Project, User } = require('../../db');


const createProject = async (name, description, min_amount, max_amount, goal_amount, initial_date, deadline, gallery, category, status, userId) => {



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

await newProject.addUser(userId);


return newProject;

};

module.exports = { createProject }