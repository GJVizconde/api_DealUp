const { Comment } = require('../../db');

const updateComment = async (id, comment) => {

    const editComment = await Comment.findByPk(id);

    if(!editComment) { throw new Error('Comment not found');
    }
    editComment.comment = comment;

    await editComment.save();
   
    return editComment;

};

module.exports = { updateComment }