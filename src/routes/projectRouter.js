const { Router } = require ( "express" );

const { getProjectsHandler, getIdProjectsHandler }= require('../handlers/Projects/getProjectsHandler');
const { createProjectHandler } = require('../handlers/Projects/postProjectsHandler');
const { updateProjectHandler } = require('../handlers/Projects/putProjectHandler');
const {deleteProjectHandler} = require('../handlers/Projects/deleteProjectHandler');

const projectRouter = Router();

projectRouter.get('/', getProjectsHandler);
projectRouter.get('/:id', getIdProjectsHandler);
projectRouter.post('/', createProjectHandler);
projectRouter.put('/:id', updateProjectHandler);
projectRouter.delete('/:id', deleteProjectHandler);


module.exports = projectRouter;