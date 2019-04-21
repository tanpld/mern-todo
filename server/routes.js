const router = require('express').Router();
const controllers = require('./controllers');

router.get('/', controllers.getAll);
router.post('/', controllers.create);
router.post('/delete/:todoId', controllers.delete);
router.patch('/complete/:todoId', controllers.complete);
module.exports = router;
