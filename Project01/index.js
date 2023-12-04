const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Extract the URL and convert it to a file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'home.html' : req.url.slice(1) + '.html');

  // Check if the file exists
  fs.exists(filePath, (exists) => {
    if (exists) {
      // If the file exists, read and serve it
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else {
      // If the file doesn't exist, return a 404 response
      filePath = path.join(__dirname, 'public', '404.html');
      fs.readFile(filePath, (err, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
