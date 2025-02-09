const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

// Directory of public folder
const publicDirectory = path.join(__dirname);

// Create a server to serve the files
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = path.join(publicDirectory, parsedUrl.pathname);

    // Check if the requested file exists in the public folder
    fs.stat(pathname, (err, stats) => {
        if (err || !stats.isFile()) {
            res.statusCode = 404;
            res.end('File not found');
            return;
        }

        // Serve the file
        fs.createReadStream(pathname).pipe(res);
    });
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
