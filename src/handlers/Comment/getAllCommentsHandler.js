const { allCommentPost } = require('../../controllers/Comment_Post_Project/allCommentController');


const getAllComentHandler = async (req,res) => {

 try {
    
    const allComments = await allCommentPost();

res.status(200).json(allComments);

} catch (error) { res.status(400).json({ error: error.message })
}

};

module.exports = { getAllComentHandler }