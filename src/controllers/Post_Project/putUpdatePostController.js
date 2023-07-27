const { Post } = require('../../db');

const updatePost = async (id, description, image_gallery, video_gallery) => {

// try {
    
const updatePost = await Post.findByPk(id);

if(!updatePost) {
    throw new Error("Post not found");
}
updatePost.description = description;
updatePost.image_gallery = image_gallery;
updatePost.video_gallery = video_gallery;

await updatePost.save();
return updatePost;

// } catch (error) {
    
// }

};

module.exports = { updatePost }