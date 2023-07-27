const { Post, Comment } = require('../../db');

const getAllPostProjects = async () => {

    const dbPost = await Post.findAll({
        include: {
            model: Comment,
            attributes: ['comment'],
        },
        
    });

    return dbPost;

};

module.exports = { getAllPostProjects };