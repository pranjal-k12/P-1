const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    // Read the message from the file if it exists
    let message = '';
    try {
      message = fs.readFileSync('message.txt', 'utf8');
    } catch (err) {
      console.error(err);
    }

    // Render the HTML form with the message if it exists
    res.write(`
      <html>
        <head>
          <title>Node.js Form Example</title>
        </head>
        <body>
            <p>${message}</p>
          <form action="/message" method="post">
            <label for="message">Message:</label>
            <input type="text" id="message" name="message">
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  if (req.url === '/message' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      // Write the message to the file
      fs.writeFileSync('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
