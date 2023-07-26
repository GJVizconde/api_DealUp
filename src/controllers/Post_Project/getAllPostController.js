const { Post } = require('../../db');

const getAllPostProjects = async () => {

    const dbPost = await Post.findAll();

    return dbPost;
    //arreglar para que me traiga todos los post de un id determinado de proyecto
};

module.exports = { getAllPostProjects };