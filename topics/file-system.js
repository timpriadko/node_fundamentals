const { rejects } = require('assert')
const fs = require('fs')
const path = require('path')

//* create folder
// console.log('START')

// fs.mkdirSync(path.resolve(__dirname, 'dir'), (err) => {
// 	if (err) {
// 		console.log(err)
// 		return;
// 	}
// 	console.log('Folder created')
// })

// console.log('END')

//* rm folder
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
// 	if (err) {
// 		throw err;
// 	}
// })

//* create file
// fs.writeFile(path.resolve(__dirname, 'test.txt'), '2 qwerty 8 6 24', (err) => {
// 	if (err) {
// 		throw err;
// 	}

// 	console.log('File created')
// })

//* add data to file
// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'Added smth', (err) => {
// 	if (err) {
// 		throw err;
// 	}

// 	console.log('File updated')
// })

//* creating file and adding data to it via promise
const writeFileAsync = async (path, data) => {
	return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
		if (err) {
			return reject(err.message)
		}
		resolve()
	}))
}

const appendFileAsync = async (path, data) => {
	return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
		if (err) {
			return reject(err.message)
		}
		resolve()
	}))
}

//* read file data
const readFileAsync = async (path) => {
	return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
		if (err) {
			return reject(err.message)
		}
		resolve(data)
	}))
}

//* remove file
const removeFileAsync = async (path) => {
	return new Promise((resolve, reject) => fs.rm(path, (err) => {
		if (err) {
			return reject(err.message)
		}
		resolve()
	}))
}

//* writeFileAsync usage example
// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123333'))
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456'))
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789'))
// 	.then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

//* removeFileAsync usage example
// removeFileAsync(path.resolve(__dirname, 'test.txt'))
// 	.then((console.log('file was removed')))


//* pass the string via the env variable and write it to the file
//* read the file, count the number of words in the file and write them to a new file count.txt, then remove the first file
const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
	.then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
	.then(data => data.split(' ').length)
	.then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Num. of words ${count}`))
	.then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))