const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    if (url === '/home'){
        res.write('<html><head><body><h1>Welcome Home</h1></body></head></html>')
    } else if (url ==='/about'){
        res.write('<html><head><body><h1>Welcome to About Us page</h1></body></head></html>')
    } else if(url === '/node'){
        res.write('<html><head><body><h1>Welcome to my Node Js project</h1></body></head></html>')
    }
   res.end();
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
