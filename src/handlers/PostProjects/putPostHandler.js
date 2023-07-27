const { updatePost } = require('../../controllers/Post_Project/putUpdatePostController');

const updatePostHandler = async (req, res) => {
    
    try {

    const { id } = req.params;
    const { 
        description,
        image_gallery,
        video_gallery
    } = req.body;
    
    const resultUpdatePost = await updatePost(
        id,
        description,
        image_gallery,
        video_gallery
    );

    res.status(200).json(resultUpdatePost);
    
} catch (error) {
    res.status(400).json({ error: error.message});
}

};

module.exports = { updatePostHandler }