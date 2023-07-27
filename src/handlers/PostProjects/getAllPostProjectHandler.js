const { getAllPostProjects } = require('../../controllers/Post_Project/getAllPostController');

const getPostProjectHandler = async (req, res) => {


try {
    
    const results = await getAllPostProjects();

    res.status(200).json(results);

} catch (error) {
    res.status(400).json({ error: error.message})
}

};

module.exports = { getPostProjectHandler }