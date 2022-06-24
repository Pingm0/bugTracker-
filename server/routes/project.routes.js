// const { authenticate } = require('../config/jwt.config');
const ProjectController = require('../controllers/project.controller');
module.exports = (app) => {
    app.get('/api/projects/',ProjectController.findAllProjects);
    app.post('/api/project/',ProjectController.createProject);
    app.delete('/api/delete/project/:id',ProjectController.deleteProject);
    app.put('/api/update/project/:id',ProjectController.updateProject);
    app.get('/api/project/:id',ProjectController.findProjectBugs);
    app.put('/api/delete/bug/:id/:projid',ProjectController.deleteBug);








    // app.get('/api/food', FoodController.findAllFood);
    // app.post('/api/food',authenticate,FoodController.createFood);
    // app.get('/api/onefood/:id',FoodController.getOneFood);
    // app.put('/api/updatefood/one/:id/:username',authenticate,FoodController.updateFood);
    // app.delete('/api/deletefood/:id',authenticate,FoodController.deleteFood);
    // app.get('/api/food/all/expired/:username',FoodController.findExpiredFood);
    // app.get('/api/foodbyuser/:username',authenticate,FoodController.findAllFoodByUser)

    
}