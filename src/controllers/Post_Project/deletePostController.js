const { Post } = require('../../db');

const deletePost = async (id) => {

try {
    
postFound = await Post.findByPk(id);

if(!postFound) {
    throw new Error('Post not found');
}

const deletePost = await Post.destroy({
    where: {
        id,
    },
});

return deletePost;

} catch (error) {
    throw new Error('Failed to delete Post: ' + error.message);
}

};

module. exports = { deletePost }