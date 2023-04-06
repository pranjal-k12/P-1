const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Pranjal");
})

server.listen(3000, () => {
    console.log("Server is listening on PORT 3000");
})
