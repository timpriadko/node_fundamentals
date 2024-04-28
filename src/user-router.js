const Router = require('../framework/Router');
const controller = require('./user-controller');
const router = new Router();

const users = [
	{id: 1, name: 'Artem_test'},
	{id: 2, name: 'John_Doe'}
]

router.get('/users', controller.getUsers)

router.post('/users', controller.createUser)

module.exports = router