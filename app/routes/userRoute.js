const app = () => {
    const users = require('../controllers/usersController');

    const router = require('express').Router();

    router.post('/', users.create);
    router.get('/', users.findAll);
    router.get('/:id', users.find);
    router.put('/:id', users.update);
    router.delete('/:id', users.deletes);

    // app.use('/user', router)
    return router;
};

module.exports = app;