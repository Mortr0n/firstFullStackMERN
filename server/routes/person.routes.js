const PersonController = require('../controllers/person.controller');

module.exports = (app) => {
    // the top one is for testing the api functionality as I build
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
}