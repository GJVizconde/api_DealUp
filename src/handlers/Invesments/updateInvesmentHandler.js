const { updateInvesment } = require('../../controllers/Invesment/updateInvesmentsController');

const updateInvesmentsHandler = async (req, res) => {

    try {
        const { id } = req.params;
        const {
        contribution,
        comment,
        UserId,
        ProjectId
        } = req.body;

       
        if(!UserId) { res.status(400).json('User ID is required')};
        if(!ProjectId) { res.status(400).json('Project ID is required')};
        
        const updateResult = await updateInvesment( id,contribution, comment, UserId, ProjectId);
        res.status(200).json(updateResult);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { updateInvesmentsHandler }