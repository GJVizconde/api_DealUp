const { Comment, Post } = require('../../db');

const createComment = async (comment, postId,as) => {

const post = await Post.findByPk(postId);

if(!post) { throw new Error('Post not found');}

const newComment = await Comment.create({
    comment: comment,
    postId: postId
});

return newComment;

};

module.exports = { createComment }