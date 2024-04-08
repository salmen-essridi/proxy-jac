const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Proxy server options
const proxyOptions = {
  target: 'https://www.jacadi.fr/', // Target URL to proxy requests to
  changeOrigin: true // Changes the origin of the host header to the target URL
  ,followRedirects: false // Disables redirection
};

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Proxy the incoming request
  proxy.web(req, res, proxyOptions);
});

// Listen for 'proxyRes' event to modify response
proxy.on('proxyRes', (proxyRes, req, res) => {
  let body = [];
  
  // Collect response chunks
  proxyRes.on('data', (chunk) => {
    body.push(chunk);
  });
  
  // Modify response when it is fully received
  proxyRes.on('end', () => {
    body = Buffer.concat(body).toString();
    
    // Replace text in the response body
    body = "jjjjj"

    console.log('body');
    
    // Set the modified body back to the response
    res.end(body);
  });
});

// Error handling
proxy.on('error', (err, req, res) => {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  
  res.end('Something went wrong.');
});

// Start the 5000
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
