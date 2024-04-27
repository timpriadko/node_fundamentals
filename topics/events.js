const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second) => {
	console.log(`You've sent a message ` + data);
	console.log(`The second argument ` + second);
})

const MESSAGE = process.env.message || '';

if (MESSAGE) {
	emitter.emit('message', MESSAGE, 123);
} else {
	emitter.emit('message', `You haven't provided a message`);
}