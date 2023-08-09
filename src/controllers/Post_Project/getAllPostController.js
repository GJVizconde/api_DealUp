const { Post, Comment,User } = require('../../db');

const getAllPostProjects = async () => {

    const dbPost = await Post.findAll({
        include: {
            model: Comment,
            attributes: ["id",'comment'],
            include: [
                {
                  model: User,
                  attributes: ["id", "fullName", "role"],
                },
              ],
        },       
    });

    return dbPost;

};

module.exports = { getAllPostProjects };