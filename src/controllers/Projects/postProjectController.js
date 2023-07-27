const { Project, User } = require('../../db');


const createProject = async (name,
     description,
     min_amount,
     max_amount,
     goal_amount,
     initial_date,
     deadline,
     image_cover,
     category,
     status,
     UserId
      ) => {



const newProject = await Project.create({
    name,
    description,
    min_amount,
    max_amount,
    goal_amount,
    initial_date,
    deadline,
    image_cover,
    category,
    status
})

await newProject.addUser(UserId);


return newProject;

};

module.exports = { createProject }