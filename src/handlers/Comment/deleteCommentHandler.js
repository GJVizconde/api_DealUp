const { deleteComment } = require('../../controllers/Comment_Post_Project/deleteCommentController');

const deleteCommentHandler = async (req, res) => {

 try {

    const { id } = req.params;

    const resultDelete = await deleteComment(id);
    
    res.status(200).json({ message: 'Comment was delete'});

 } catch (error) { res.status(400).json({ error: error.message });
 }

};

module.exports = { deleteCommentHandler }