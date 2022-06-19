// const { authenticate } = require('../config/jwt.config');
const BugController = require('../controllers/bug.controller');
module.exports = (app) => {
    app.get('/api/bugs/:id',BugController.findProjectBugs);
    app.get('/api/bugs',BugController.findAllBugs);
    app.post('/api/bug/:id',BugController.createBug);
    app.delete('/api/delete/bug/:id',BugController.deleteBug);
    app.put('/api/update/bug/:id',BugController.updateBug);
    
}