// used for old code
// const http = require('http');
// const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/project/index.html'));
});

app.get('/about', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/project/about.html'));
});

app.get('/contact-me', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/project/contact-me.html'));
});

app.get('/contact', (req, res) => {
    res.statusCode = 301;
    res.redirect(path.join(__dirname, '/project/contact-me.html'));
});

app.use((req, res, next) => {
    res.statusCode = 404;
    res.status(404).sendFile(path.join(__dirname, 'project/404.html'));
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    };

    console.log(`listening for requests on port ${PORT}`)
});

// old code
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');

//     let path = './project/';
//     switch(req.url) {
//         case '/':
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200;
//             break;
//         case '/contact-me':
//             path += 'contact-me.html';
//             res.statusCode = 200;
//             break;
//         case '/contact':
//             res.statusCode = 301;
//             res.setHeader('Location', '/contact-me');
//             res.end();
//             break;
//         default:
//             path += '404.html';
//             res.statusCode = 404;
//             break;
//     };

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.write(data);
//             res.end();
//         };
//     });
// });

// server.listen(8080, 'localhost', () => {
//     console.log('listening for requests on port 8080')
// });