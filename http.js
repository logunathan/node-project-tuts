const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
    if (res.url === '/') {
        res.end("my first Node js app");
    }
    if (res.url === '/about') {
        res.end('This is about page');

    }
    res.end(`
        <h1>Helloooo</h1>
        <p>Page not found</p>
        <a href="/">Click here to go to Home page</a>    
    `);

});

server.listen(5000);