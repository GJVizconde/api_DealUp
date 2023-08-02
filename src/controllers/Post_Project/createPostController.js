const { Post } = require('../../db');

const createPost = async (description, image_gellery, video_gallery, ProjectId) => {

const newPost = await Post.create({
    description,
    image_gellery,
    video_gallery,
    ProjectId
});

return newPost;

};

module.exports = { createPost }