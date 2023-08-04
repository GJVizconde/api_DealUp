const { createComment } = require('../../controllers/Comment_Post_Project/createCommentController');

const createCommentHandler = async (req,res) => {

try {
    
const { comment, PostId, UserId} = req.body;

if(!comment) { return res.status(400).json('Comment is required');
}

if(!PostId) { return res.status(400).json('Post ID is required');
}
if(!UserId) { return res.status(400).json('User ID is required');
}


const newComment = await createComment( comment, PostId, UserId);

res.status(201).json({ message: 'Comment created successfully', newComment });

} catch (error) { res.status(400).json({ error: error.message });
}

};

module.exports = { createCommentHandler }