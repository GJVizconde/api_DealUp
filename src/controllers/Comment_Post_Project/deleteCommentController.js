const { Comment } = require('../../db');

const deleteComment = async (id) => {
   
    try {
        
        commentFound = await Comment.findByPk(id);

        if(!commentFound) { throw new Error('Comment not found');}

        const deleteComment = await Comment.destroy({
            where: {
                id
            },
        });

        return deleteComment;

    } catch (error) {
        throw new Error('Failed to delete Comment: ' + error.message);
    }

};

module.exports = { deleteComment };