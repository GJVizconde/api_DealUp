const { Project, Post } = require('../../db');

const createPost = async (description, image_gellery, video_gallery, project_id) => {


const newPost = await Post.create({
    description,
    image_gellery,
    video_gallery
});

//await newPost.addProject(project_id);

return newPost;

};

module.exports = { createPost }