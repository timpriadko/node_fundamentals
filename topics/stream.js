// Readable
// Writable
// Duplex
// Transform

const fs = require('fs');
const path = require('path');

//*
// fs.readFile(path.resolve(__dirname, './test.txt'), (err, data) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log(data);
// })

//*
// const stream = fs.createReadStream(path.resolve(__dirname, './test.txt'));

// stream.on('data', (chunk) => {
// 	console.log(chunk);
// })

// stream.on('end', (chunk) => console.log('End reading'));
// stream.on('open', (chunk) => console.log('Start reading'));
// stream.on('error', (e) => console.log(e));

//*
// const writableStream = fs.createWriteStream(path.resolve(__dirname, './test2.txt'));
// for (let i = 0; i < 20; i++) {
// 	writableStream.write(i + '\n');
// }
// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on('error');

//*
// const http = require('http');

// http.createServer((req, res) => {
// 	//* req - readable stream
// 	//* res - writable stream

// 	const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

// 	// Stream will finish reading before the user will download the file
// 	stream.pipe(res);
// })