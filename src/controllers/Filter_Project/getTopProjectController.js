const { getAllProjects } = require('../Projects/getAllProjects');

const topProjectController = async () => {

    try {
        
        const allProject = await getAllProjects();

        const topRatedProjects = allProject.slice().sort( (a,b) => b.average_rating - a.average_rating ).slice(0, 10);

        const latestProjects = allProject.slice().sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate)).slice(0, 10);

        const result = {
            topRated: topRatedProjects,
            last_created: latestProjects
        };

        return result;

    } catch (error) {
        throw error;
    }
    
};

module.exports = { topProjectController }