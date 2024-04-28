const users = [
	{id: 1, name: 'Artem_test'},
	{id: 2, name: 'John_Doe'}
]

const getUsers = (req, res) => {
	// todo - rm
	console.log(req.params);

	if (req.params.id) {
		return res.send(users.find(user => user.id == req.params.id))
	}

	res.send(users);
}

const createUser = (req, res) => {
	// todo - rm
	console.log(req.body);

	const user = req.body;
	users.push(user);
	res.send(users);
}

module.exports = {
	getUsers,
	createUser
}