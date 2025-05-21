// Load the built-in http module
const http = require('http');

// Set port
const port = 3000;

// Create server
const server = http.createServer((req, res) => {
  // Set the Content-Type header
  res.setHeader('Content-Type', 'text/html');

  // Routing logic
  if (req.url === '/') {
    res.writeHead(200);
    res.end(`
      <h1>Here's my home page</h1>
      <p>Welcome to Express!</p>
    `);
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end(`
      <h1>Here's Newton's Node About Page</h1>
      <p>Welcome to Express!</p>
    `);
  } else {
    res.writeHead(404);
    res.end(`
      <h1>404 Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    `);
  }
});

// Start server
server.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
