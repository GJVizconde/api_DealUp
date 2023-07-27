const { Comment } = require('../../db');

const allCommentPost = async () => {

    const dbComment = await Comment.findAll();

    return dbComment;
};

module.exports = { allCommentPost }