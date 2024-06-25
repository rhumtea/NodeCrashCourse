// const person = require('./person');
// console.log(person.name);
// console.log(person.name);

//Module Wrapper Function
// (function(exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename);

// const Person = require('./person');
// const person1 = new Person('John Doe', 30);
// person1.greeting();

// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('message', (data) => console.log('Called Listener:', data));
// logger.log('Hello World');
// logger.log('Phong');
// logger.log('Tr');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.end('<h1>Home</h1>');
    }

    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.end('<h1>Home</h1>');
    }

    if (req.url === '/api/users') {
        const users = [
            { name: 'Jen Huynh', age: 40 },
            { name: 'Garaco Group', age: 30 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

// port with whatever is in the environment variable PORT or 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));