const { deletePost } = require('../../controllers/Post_Project/deletePostController');

const deletePostHandler = async (req, res) => {

try {

    const { id } = req.params;

const resultDelete = await deletePost(id);

res.status(200).json({ message: 'Post was delete'});

} catch (error) {
    res.status(400).json({ error: error.message });
}

};

module.exports = { deletePostHandler }