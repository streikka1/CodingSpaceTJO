const http = require('http');
const url = require('url');
//const filesys = require('filesystem');
//const part = require('path');

const hostname = '127.0.0.1';
const port = '3000';
/* Function definition instead of arrow function
function listenRequests (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/pdf');
    
    res.end('Test World');
}
*/

const server = http.createServer((req, res) => {
    // Implicite Header (w/o  writeHead)
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'application/pdf');
    
    // {Content... } creates an Object [object literal syntax], as writeHead is definied in TS and 
    // has an optional parameter of type interface OutgoingHttpHeaders 
    res.writeHead(200, {'Conent-Type': 'text/html'});
    res.write('Test World 123');
    res.end();
});

server.listen(port, hostname, () => {
    writeToConsole(port, hostname);
});

function writeToConsole(port, hostname) {
    console.log(`Server running at ${hostname} and ${port}`);

}

// chaining example for above code 

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let queryKeyword = url.parse(req.url, true).query;
    //res.write(queryKeyword.year);
    res.end(queryKeyword.year);
}).listen(3001, hostname, () => {
    console.log('Server running');
});

// Diese Funktion würde writeToConsole überschreiben, trotz anderer Signatur!
/*
function writeToConsole() {
    console.log(`Server running ${arguments[0]}`);

}
*/
