const { Project } = require('../../db');

const updateProject =  async (id,
    campoActualizar) => {
      
        try {
            
            const updatedProjectById = await Project.findOne({ where: { id} });
    
            if (!updatedProjectById) {
              throw new Error('Project not found');
            }

           
            if(campoActualizar.name !== undefined) {
                updatedProjectById.name = campoActualizar.name;
            }
            if(campoActualizar.description !== undefined) {
                updatedProjectById.description = campoActualizar.description;
            }
            if(campoActualizar.min_amount !== undefined) {
                updatedProjectById.min_amount = campoActualizar.min_amount;
            }
            if(campoActualizar.max_amount !== undefined) {
                updatedProjectById.max_amount = campoActualizar.max_amount;
            }
            if(campoActualizar.goal_amount !== undefined) {
                updatedProjectById.goal_amount = campoActualizar.goal_amount;
            }
            if(campoActualizar.initial_date !== undefined) {
                updatedProjectById.initial_date = campoActualizar.initial_date;
            }
            if(campoActualizar.deadline !== undefined) {
                updatedProjectById.deadline = campoActualizar.deadline;
            }
            if(campoActualizar. image_cover !== undefined) {
                updatedProjectById.image_cover = campoActualizar.image_cover;
            }
            if(campoActualizar.category !== undefined) {
                updatedProjectById.category = campoActualizar.category;
            }
            if(campoActualizar.status !== undefined) {
                updatedProjectById.status = campoActualizar.status;
            }

        
            await updatedProjectById.save();
            return updatedProjectById;
          } catch (error) {}

};

module.exports = {updateProject}