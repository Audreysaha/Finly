// const http = require('http');

// const server = http.createServer((req, res) => {
//     const { url } = req;
//     console.log(req.url);
//     if(url === '/') {
//       res.end('Hello FRom Node.js'); //res.end used to send arguments
//     } else if (url === '/contact') {
//         res.end('The Contact Page');
//     } else if (url === '/about') {
//         res.end('The About Page');
//     } else {
//         res.writeHead(404)
//         res.end('Not Found'); 
//     }
//  });

// server.listen(3000, () => { //method used to open a specific web port connections(display output)
//     console.log('Server running on port 3000');
// });

const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));

// app.get('/', (req, res) => {
//     res.send('Hello From Node.js');
// });

// app.get('/contact', (req, res) => {
//     res.send('The Contact Page');
// });

// app.get('/about', (req, res) => {
//     res.send('The About Page');
// });

// app.get('*', (req, res) => { //* here is used to display NOT FOUND on any other word which has not been defined if you enter /b it will display NOT FOUND
//     res.status(404).send('Not Found');
// });

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});

app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});
app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});
app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});