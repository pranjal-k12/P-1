const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

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
          fs.writeFile('message.txt', message, (err) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                return res.end();
              }
              res.statusCode = 302;
              res.setHeader('Location', '/');
              res.end();
          });
        });
      }    

}

module.exports = requestHandler;