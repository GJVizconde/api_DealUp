const { Router } = require ( "express" );

const { getProjectsHandler, getIdProjectsHandler }= require('../handlers/Projects/getProjectsHandler');
const { createProjectHandler } = require('../handlers/Projects/postProjectsHandler');
const { updateProjectHandler } = require('../handlers/Projects/putProjectHandler');
const {deleteProjectHandler} = require('../handlers/Projects/deleteProjectHandler');

const { updateHandler } = require('../handlers/Projects/updateHandler');

const projectRouter = Router();

projectRouter.get('/', getProjectsHandler);
projectRouter.get('/:id', getIdProjectsHandler);
projectRouter.post('/', createProjectHandler);
projectRouter.put('/prueba/:id', updateProjectHandler); //ruta vieja carga todos los campos
projectRouter.delete('/:id', deleteProjectHandler);
projectRouter.put('/:id', updateHandler);


module.exports = projectRouter;