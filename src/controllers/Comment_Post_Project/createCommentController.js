const { Comment } = require('../../db');

const createComment = async (comment) => {

const newComment = await Comment.create({
    comment
});

return newComment;

};

module.exports = { createComment }