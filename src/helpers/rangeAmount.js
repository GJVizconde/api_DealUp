const { getAllProjects } = require('../controllers/Projects/getAllProjects');

const minAmountAll = async () => {
    const allProject = await getAllProjects();

    let minAmountMin= null;
    let maxAmountMin = null;
    
    if(allProject.length > 0) {
        minAmountMin = allProject[0].min_amount;
        maxAmountMin = allProject[0].min_amount;

        for(let i= 1; i< allProject.length ; i++ ) {
            const minAmountProject = allProject[i].min_amount;

            if( minAmountProject < minAmountMin ){
                minAmountMin = minAmountProject;
            }

            if( minAmountProject > maxAmountMin) {
                maxAmountMin = minAmountProject
            }
        
        }
    }
    return { minAmountMin, maxAmountMin};
    
};

const maxAmountAll = async () => {
    const allProject = await getAllProjects();

    let minAmountMax= null;
    let maxAmountMax = null;
    
    if( allProject.length > 0 ) {
        minAmountMax = allProject[0].max_amount;
        maxAmountMax = allProject[0].max_amount;

        for( let i= 1; i< allProject.length; i++) {
            const maxAmountProject = allProject[i].max_amount;
            
            if( maxAmountProject < minAmountMax ) {
                minAmountMax = maxAmountProject;
            }
            if( maxAmountProject > maxAmountMax ) {
                maxAmountMax = maxAmountProject;
            }
        }
    } 
 
    return { minAmountMax, maxAmountMax};
};


module.exports = { minAmountAll, maxAmountAll }