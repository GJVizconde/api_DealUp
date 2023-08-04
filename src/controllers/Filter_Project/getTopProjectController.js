const { getAllProjects } = require('../Projects/getAllProjects');
const { calculateProjectVoteCount } = require('../../helpers/countRating');
const topProjectController = async () => {

    try {
        const voteCountProject = await calculateProjectVoteCount();
      
        const allProject = await getAllProjects();

        const topRatedProjects = allProject.slice().sort( (a,b) => b.average_rating - a.average_rating ).slice(0, 10);

        topRatedProjects.sort((a, b) => {
            const voteCountA = voteCountProject[a.id] || 0;
            const voteCountB = voteCountProject[b.id] || 0;
            if (a.average_rating === b.average_rating) {
                return voteCountB - voteCountA;
            }
            
            return b.average_rating - a.average_rating;
        })

        const latestProjects = allProject.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 10);

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