const { updateComment } = require('../../controllers/Comment_Post_Project/updateCommentController');

const updateCommentHandler = async (req, res) => {

    try {
        
        const { id } = req.params;
        const { comment } = req.body;

        const resultUpdateComment = await updateComment( id, comment );

    res.status(200).json(resultUpdateComment);

    } catch (error) { res.status(400).json({ error: error.message });
    }

};

module.exports = { updateCommentHandler }