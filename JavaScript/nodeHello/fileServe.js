const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = '3002';
const portWrite = '3003';
const portHelloHtml = '3004';


// Server to read pdf
const server = http.createServer((req, res) => {
    fs.readFile('C:/Users/Strei/Downloads/2015-07-08-Kapitalmassnahme-Google-Moeller-Maersk.pdf', (err, data) => {

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
    console.log('Server Running!');
});

//server to get start html as request in url param
http.createServer((req, res) => {
    let query = url.parse(req.url, true);
    // "." um auf Verzeichnes dieses JavaScript Files zu zeigen
    let filename = 'JavaScript/nodeHello/' + query.pathname; 
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end(`404 Not Found file ${filename}`);
            //throw err;
        }
        res.writeHead(200, { 'Conent-Type': 'text/html' });
        res.write(data);
        res.end();
    });

}).listen(portHelloHtml, hostname, () => {
    console.log(`Server Running at ${portHelloHtml}`);
});