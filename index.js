const e = require('express');
const crypto = require('crypto');
var http = require('http'),
    connect = require('connect'),
    httpProxy = require('http-proxy'),
    gzip = require('connect-gzip'),
    fs = require('fs'),
    path = require('path');
    ;

var selects = [];

var simpleselect = {

    idPrefix : 'jac-js-',
};
var simpleselectCSS = {

    idPrefix : 'jac-css-',
};
var simpleselectFonts = {
    idPrefix : 'jac-font-',
};
var preloads = {
    idPrefix : 'jac-preload-',
};

var inject = {
    idPrefix : 'jac-inject-',
};

var inject2 = {
    idPrefix : 'jac-inject2-',
};

var img = {
    idPrefix : 'jac-img-',
};

var inject3 = {
    idPrefix : 'jac-inject3-',
};

var inject4 = {
    idPrefix : 'jac-inject4-',
};


var custom_1 = {
    idPrefix : 'custom-',
};


var noscript = {
    idPrefix : 'noscript-',
};


simpleselect.query = 'script'; // Selecting script tags with type="text/javascript"
simpleselect.idPrefix = 'jac-js-';

// partener JS [ 2, 12, 13, 14,, 15, 19,22,91,93 ];
simpleselect.itemsIndexsToDisable =  [  2, 12, 13, 14,, 15, 19,22,91,93, 20, 6,7,8,9,10, 16, 20, 23, 24 ,11, 45 , 47,  27 , 56, 58, 90 ];

//[13, 8, 7,9,2,15,93, 94, 20 , 23, 24 , 90, 6,  19 ];//  [20, 33, 6, 2, 12, 13, 14,15, 19,22,91,93 ];

//[ 1, 2, 3, 4,, 5, 6,8,9,10,11,12,13,14,19, 16,17,23,25,26,92,93 ];



simpleselect.func = function (node) {
    // Replace the type attribute with text/jac
   // if (node && typeof node.attr === 'function') {




     

if ( !node.getAttribute('defer') ) {
   // node.setAttribute('type', 'text/no-execAll' );
   // var ws = node.createWriteStream();
    //ws.end('HOLA');

    // node.setAttribute('defer', 'true');
     //node.setAttribute('async', 'true');
    //console.log(node.getAttribute('src') ) 
    if(typeof node.getAttribute('src') === 'undefined') {

    // node.setAttribute('type', 'text/noexec-without-src');
   } else {
 
 ///  node.setAttribute('type', 'text/noexec-with-src');
    // node.setAttribute('defer', 'true');
    // node.setAttribute('async', 'true');
   }
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
  
//node.setAttribute('loading', 'lazy');
//node.createWriteStream().end('<img width="400" height="400" data-splide-lazy="" alt="" tgid="jac-img-50" src="https://via.placeholder.com/200">');
 
    
}

inject.query = '.jac-product-splide-main-wrapper';
inject.func = function (node) {
  
 //node.createWriteStream().end('<img width="400" height="400" data-splide-lazy="" alt="" tgid="jac-img-50" src="https://via.placeholder.com/200">');
 //node.setAttribute('style', 'display : none; ');
    
    
}


inject2.query = 'link[rel="manifest"]';
inject2.func = function (node) {
  
    //node.setAttribute('rel', 'preload');
    //node.setAttribute('as', 'image');
    //node.setAttribute('href', '/~partytown/partytown.js');
    //node.setAttribute('loading', '');
    
}


inject3.query = '#ariaStatusMsg';
inject3.func = function (node) {
  
    node.createWriteStream().end(`
   <script defer type="text/javascript" src="/_ui/desktop/theme-jacadi/js/dist/jquery-3.5.1.min.js" ></script> 
   <script defer type="text/javascript" src="/_ui/desktop/theme-jacadi/js/dist/Intl.min.js" ></script> 
   <script defer type="text/javascript" src="/_ui/desktop/theme-jacadi/js/libs/browser-dtector.min.js" ></script> 
  
   <script defer type="text/javascript"  src="/_ui/desktop/theme-jacadi/js/libs/intl/locale-data/jsonp/fr.js" ></script> 
   <script defer type="text/javascript" src="/override/group.js" ></script>  `);
 
   
    
}

inject4.query = '.jac-product-splide-main-wrapper';
inject4.func = function (node) {
  
 //
 node.createWriteStream().end(`<div class="jac-product-splide-main splide" id="zzzz" style="visibility: visible;" >
 <div class="splide__arrows splide__arrows--ltr">
                    <button disabled class="splide__arrow splide__arrow--prev" aria-label="Vignette précédente" aria-controls="splide02-track">
                        <img src="/_ui/desktop/assets/img/svg/prev-slate-gray.svg" alt="">
                    </button>
                    <button onclick="nextSlide();" class="splide__arrow splide__arrow--next" aria-label="Vignette suivante" aria-controls="splide02-track">
                        <img src="/_ui/desktop/assets/img/svg/next-slate-gray.svg" alt="">
                    </button>
                </div>
 <div class="splide__track"><ul class="splide__list" id="list-xxx">
 <li class="splide__slide" ><img width="400" height="400" onclick="zoomInit();"  fetchpriority="high" src="/medias/product-list-2037233-701-P-01.jpg?context=bWFzdGVyfGltYWdlc3wyMTYyMDF8aW1hZ2UvanBlZ3xoM2IvaDc2Lzk4ODM1ODU2NDI1MjYvcHJvZHVjdF9saXN0XzIwMzcyMzNfNzAxX1BfMDEuanBnfGViZjRhNzEwOWNmMWI5ZjZjYjA0ZDA4Y2M3YWJhZjA2YjczMDcyMjQ2MWQ2MmU1MjlhOTc4NmI2MzA0YTFkNDM"></img> </li>

 </ul></div></div>`);

 
   
    
}


noscript.query = 'noscript';
noscript.func = function (node) {
  
///node.setAttribute('loading', 'lazy');
node.createWriteStream().end('<div></div>');
 
    
}



//<link rel="preload" as="image" href="https://mondomaine.com/images/monimage.jpg" />

custom_1.query = '.prefix-1';
custom_1.func = function (node) {
  
    node.createWriteStream().end('<div>+ Trumpet</div>');
 
    
  //node.setAttribute('type', 'test/salmen');
    
    
}

selects.push(simpleselect);
selects.push(preloads);
selects.push(img);


selects.push(simpleselectCSS);
selects.push(simpleselectFonts);


selects.push(inject);
selects.push(inject2);
selects.push(inject3);
selects.push(inject4);
selects.push(noscript);




var app = connect();

var proxy = httpProxy.createProxyServer({
    target: 'https://www.jacadi.fr',
    changeOrigin: true,
    followRedirects: false
});


// Middleware to intercept URLs containing "/~partytown/" and serve content from disk
app.use('/~partytown/', function(req, res, next) {

  console.log( req.url);
    var filePath = path.join(__dirname, '/~partytown/' + req.url);

    fs.access(filePath, fs.constants.F_OK, function(err) {
        if (!err) {
            res.setHeader('Content-Type', 'application/javascript');
            fs.createReadStream(filePath).pipe(res);
        } else {
            next(); // Proceed to the next middleware if file doesn't exist
        }
    });

});




app.use('/override/', function(req, res, next) {

    console.log( req.url);
      var filePath = path.join(__dirname, '/override/' + req.url);
  
      fs.access(filePath, fs.constants.F_OK, function(err) {
          if (!err) {
              res.setHeader('Content-Type', 'text/javascript');
              fs.createReadStream(filePath).pipe(res);
          } else {
              next(); // Proceed to the next middleware if file doesn't exist
          }
      });
  
  });
  

  

app.use('/_ui/desktop/theme-jacadi/js/dist/_autoload.min.js', function(req, res, next) {

    console.log( req.url);


    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found');
  

});
  


// Intercept HTML responses and modify them
app.use(require('./xxx')([], selects, true));



//gzip.gzip({ flags: '--best' })
//app.use(gzip.gzip());
// Fallback route to proxy server
app.use(function (req, res) {
   
    proxy.web(req, res);
});

http.createServer(app).listen(3000);
