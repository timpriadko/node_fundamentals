const path = require('path');

console.log('Glue sections of the path together', path.join(__dirname, '..'));
const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js');
console.log('Parse path:', path.parse(fullpath));
console.log('Separation in OS:', path.sep);
console.log('Check if absolute path:', path.isAbsolute('first/second'));
console.log('Filename:', path.basename(fullpath));
console.log('File extension:', path.extname(fullpath));

//* -----

const siteURL = 'http://localhost:8080/users?ud=5123';

const url = new URL(siteURL);

console.log(url)