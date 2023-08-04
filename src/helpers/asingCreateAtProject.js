const { User, Project } = require('../db');

const updateProjectDates = async () => {
    try {
        const usersWithProjects = await User.findAll({
            include: {
                model: Project,
                attributes: ['id', 'createdAt', 'updatedAt'],
            },
        });

        for (const user of usersWithProjects) {
            for (const project of user.Projects) {
                const userProjectEntry = project.user_project;

                if (userProjectEntry) {
                    if (userProjectEntry.createdAt && !project.createdAt) {
                        project.createdAt = userProjectEntry.createdAt;
                    }

                    if (userProjectEntry.updatedAt && !project.updatedAt) {
                        project.updatedAt = userProjectEntry.updatedAt;
                    }

                    if (project.createdAt || project.updatedAt) {
                        await project.save();
                    }
                }
            }
        }
    } catch (error) {
        throw error;
    }
};

module.exports = { updateProjectDates };