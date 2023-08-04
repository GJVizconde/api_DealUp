const { getAllProjects } = require('../Projects/getAllProjects');

const topProjectController = async () => {

    try {
        
        const allProject = await getAllProjects();

        const topRatedProjects = allProject.slice().sort( (a,b) => b.average_rating - a.average_rating ).slice(0, 3);

       // const latestProjects = allProject.slice().sort( (a,b) => )

    } catch (error) {
        throw error;
    }
    
};

module.exports = { topProjectController }