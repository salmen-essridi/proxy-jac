const e = require('express');
var http = require('http'),
    connect = require('connect'),
    httpProxy = require('http-proxy'),
    gzip = require('connect-gzip');

var selects = [];
var simpleselect = {};
var simpleselectCSS = {};
var simpleselectFonts = {};
var preloads = {};

var noexec = {};

var img = {};

var index = 1 ; 
simpleselect.query = 'script'; // Selecting script tags with type="text/javascript"
simpleselect.func = function (node) {
    // Replace the type attribute with text/jac
   // if (node && typeof node.attr === 'function') {

//&& !node.getAttribute('src').startsWith('/_ui/')

    if ( !node.getAttribute('defer') ) {
       node.setAttribute('type', 'text/no-execA' + index++);

       node.innerHTML = "xxxxxx";
       if(typeof node.getAttribute('src') === 'undefined') {
       console.log(" src = " + node.getAttribute('src') ) 
   //    node.setAttribute('type', 'text/no-execC');
      } else {
    
       // node.setAttribute('defer', 'true');
       // node.setAttribute('async', 'true');
      }
    } 
     

    if (typeof node.getAttribute('src')  === 'undefined') {
       // console.log('hhh + ' +  node.getAttribute('src'));
      //  node.setAttribute('type', 'text/no-execB');
    } 
       
    
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


noexec.query = 'script[type="text/no-exec-25"]';
noexec.func = function (node) {
  
    
  node.setAttribute('type', 'test/salmen');
    
    
}


selects.push(simpleselect);
selects.push(simpleselectCSS);
selects.push(simpleselectFonts);
selects.push(preloads);
selects.push(img);
selects.push(noexec);

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
