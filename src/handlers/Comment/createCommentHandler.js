const { createComment } = require('../../controllers/Comment_Post_Project/createCommentController');

const createCommentHandler = async (req,res) => {

try {
    
const { comment, postId} = req.body;

if(!comment) { return res.status(400).json('Comment is required');
}

if(!postId) { return res.status(400).json('Post id is required');
}

const newComment = await createComment( comment, postId);

res.status(201).json({ message: 'Comment created successfully', newComment });

} catch (error) { res.status(400).json({ error: error.message });
}

};

module.exports = { createCommentHandler }