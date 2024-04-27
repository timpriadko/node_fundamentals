const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());

if (cluster.isPrimary) {
	for (let i = 0; i < os.cpus().length - 2; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker) => {
		console.log(`Worker pid = ${worker.process.pid} is killed`)
		cluster.fork();
	})
} else {
	console.log(`Worker pid = ${process.pid} runs`)

	setInterval(() => {
		console.log(`Worker pid = ${process.pid} still runs`)
	}, 5000)
}