const { Rating, Project } = require('../db');

const calculateProjectVoteCount = async () => {
    try {
        
        const ratingList = await Rating.findAll();

        const voteCountByProject = {};

        ratingList.forEach((rating) => {
            const { ProjectId } = rating;
            if(!voteCountByProject[ProjectId]) {
                voteCountByProject[ProjectId] = 0;
            }
            voteCountByProject[ProjectId] +=1;
        });
        return voteCountByProject;

    } catch (error) {
        throw new Error('Error: ' + error.message);
    }
};

module.exports = { calculateProjectVoteCount }