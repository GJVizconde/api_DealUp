const { Investment, Project } = require('../../db');

const createInvestment = async (contribution, comment, UserId, ProjectId) => {

try {

    const newInvestment = await Investment.create({
        contribution: contribution,
        comment: comment,
        ProjectId: ProjectId,
    })
    await newInvestment.addUser(UserId);

    const project = await Project.findByPk(ProjectId);
    if(project) {
        project.collected_amount += contribution;
        await project.save();
    }

    return newInvestment;
    
} catch (error) {
    throw new Error('Failed creating new Investments: ' + error.message);
}
};

module.exports = { createInvestment }