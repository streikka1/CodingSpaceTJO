const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = '3002';
const portWrite = '3003';


// Server to read pdf
const server = http.createServer((req, res) => {
    fs.readFile('C:/Users/Thomas/Downloads/GS1_System_Architecture.pdf', (err, data) => {

        // {Content... } creates an Object [object literal syntax], as writeHead is definied in TS and 
        // has an optional parameter of type interface OutgoingHttpHeaders 
        res.writeHead(200, { 'Conent-Type': 'application/pdf' });
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname);

//server to write from url param into txt
http.createServer((req, res) => {
    let queryKeyword = url.parse(req.url, true).query;
    if (queryKeyword.file && queryKeyword.text) {
        fs.appendFile(queryKeyword.file, queryKeyword.text, (err) => {
            res.writeHead(200, { 'Conent-Type': 'text/html' });
            res.write(`File ${queryKeyword.file} was saved`);
            res.end();
            if (err) {
                throw err;
            }

        });
    }
}).listen(portWrite, hostname, () => {
<<<<<<< HEAD
    console.log('Server Running!');
=======
    console.log('Server Running great!');
>>>>>>> origin/master
});