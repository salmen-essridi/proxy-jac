var http = require('http'),
    connect = require('connect'),
    httpProxy = require('http-proxy'),
    gzip = require('connect-gzip');

var selects = [];
var simpleselect = {};
var simpleselectCSS = {};
var simpleselectFonts = {};
var preloads = {};

var img = {};


simpleselect.query = 'script'; // Selecting script tags with type="text/javascript"
simpleselect.func = function (node) {
    // Replace the type attribute with text/jac
   // if (node && typeof node.attr === 'function') {
    node.setAttribute('type', 'text/JJJJ');
 
}

simpleselectCSS.query = 'link[rel="stylesheet"]';
simpleselectCSS.func = function (node) {
  
   // node.setAttribute('type', 'text/sss');
    
    
}

simpleselectFonts.query = 'link[type="font/woff2"]';
simpleselectFonts.func = function (node) {
  
  //node.setAttribute('type', 'text/fff');
    
    
}


preloads.query = 'link[rel="preload"]';
preloads.func = function (node) {
  
  node.setAttribute('rel', 'none');
    
    
}

img.query = 'img';
img.func = function (node) {
  
  node.setAttribute('loading', 'lazy');
    
    
}


selects.push(simpleselect);
selects.push(simpleselectCSS);
selects.push(simpleselectFonts);
selects.push(preloads);
selects.push(img);

var app = connect();

var proxy = httpProxy.createProxyServer({
    target: 'https://www.jacadi.fr',
    changeOrigin: true,
    followRedirects: false
});

// Intercept HTML responses and modify them
app.use(require('./xxx')([], selects));


//gzip.gzip({ flags: '--best' })
//app.use(gzip.gzip());
// Fallback route to proxy server
app.use(function (req, res) {
    proxy.web(req, res);
});

http.createServer(app).listen(3000);
