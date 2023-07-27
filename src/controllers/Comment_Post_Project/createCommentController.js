const { Comment, Post } = require('../../db');

const createComment = async (comment, PostId, UserId) => {

const post = await Post.findByPk(PostId);

if(!PostId) { throw new Error('Post not found');}

const newComment = await Comment.create({
    comment: comment,
    PostId: PostId,
    UserId: UserId
});

return newComment;

};

module.exports = { createComment }