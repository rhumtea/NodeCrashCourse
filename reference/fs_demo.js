const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// Create and write to file (overwrites)
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File Written to...');

//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Nodejs!', err => {
//         if (err) throw err;
//         console.log('File Written to...');
//     });

// });

// Read file (without utf8 ==> draw draft buffer)
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello123.txt'), err => {
    if (err) throw err;
    console.log('File renamed...');
});