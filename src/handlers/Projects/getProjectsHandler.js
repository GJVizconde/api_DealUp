
const { getAllProjects } = require('../../controllers/Projects/getAllProjects');

const { searchProjectByName, searchProjectById } = require('../../controllers/Projects/projectController');


//SEARCH BY NAME AND ALL PROJECT

const getProjectsHandler = async (req, res) => {
const { name } = req.query;
console.log(name);

try {
   const results = (name) ? await searchProjectByName(name) : await getAllProjects();
   res.status(200).json(results);
} catch (error) {
    res.status(400).json({ error: error.message });
}

};


//SEARCH BY ID

const getIdProjectsHandler = async (req, res) => {

    const { id } = req.params;
    console.log("estoy en handler id");
    console.log(id);

    try {
        const projectById = await searchProjectById(id);
        res.status(200).json(projectById);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getProjectsHandler, getIdProjectsHandler }