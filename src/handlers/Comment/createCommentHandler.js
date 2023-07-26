const { createComment } = require('../../controllers/Comment_Post_Project/createCommentController');

const createCommentHandler = async (req,res) => {

try {
    
const { comment } = req.body;

if(!comment) { return res.status(400).json('Comment is required');
}

const newComment = await createComment( comment);

res.status(201).json({ message: 'Comment created successfully', newComment });

} catch (error) { res.status(400).json({ error: error.message });
}

};

module.exports = { createCommentHandler }