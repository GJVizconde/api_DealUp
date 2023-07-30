const { getAllPostProjects } = require('../../controllers/Post_Project/getAllPostController');

const getPostProjectHandler = async (req, res) => {


try {
    
    const results = await getAllPostProjects();
    if(!results || results.length === 0) {return res.status(204).json({})}
    res.status(200).json(results);

} catch (error) {
    res.status(400).json({ error: error.message})
}

};

module.exports = { getPostProjectHandler }