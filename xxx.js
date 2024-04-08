var trumpet = require('trumpet');
var zlib = require('zlib');

module.exports = function harmonBinary(reqSelectors, resSelectors, htmlOnly) {
  var _reqSelectors = reqSelectors || [];
  var _resSelectors = resSelectors || [];
  var _htmlOnly     = (typeof htmlOnly == 'undefined') ? false : htmlOnly;

  function prepareRequestSelectors(req, res) {
    var tr = trumpet();

    prepareSelectors(tr, _reqSelectors, req, res);

    req.on('data', function(data) {
      tr.write(data);
    });
  }

  function prepareResponseSelectors(req, res) {
    var tr          = trumpet();
    var _write      = res.write;
    var _end        = res.end;
    var _writeHead  = res.writeHead;
    var gunzip      = zlib.Gunzip();

    prepareSelectors(tr, _resSelectors, req, res);

    res.isHtml = function () {
      if (res._isHtml === undefined) {
        var contentType = res.getHeader('content-type') || '';
        res._isHtml = contentType.indexOf('text/html') === 0;
      }

      return res._isHtml;
    }

    res.isGzipped = function () {
      if (res._isGzipped === undefined) {
        var encoding = res.getHeader('content-encoding') || '';
        res._isGzipped = encoding.toLowerCase() === 'gzip' && res.isHtml();
      }

      return res._isGzipped;
    }

    res.writeHead = function () {
      var headers = (arguments.length > 2) ? arguments[2] : arguments[1]; // writeHead supports (statusCode, headers) as well as (statusCode, statusMessage, headers)
      headers = headers || {};

      /* Sniff out the content-type header.
       * If the response is HTML, we're safe to modify it.
       */
      if (!_htmlOnly && res.isHtml()) {
        res.removeHeader('Content-Length');
        delete headers['content-length'];
      }

      /* Sniff out the content-encoding header.
       * If the response is Gziped, we're have to gunzip content before and ungzip content after.
       */
      if (res.isGzipped()) {
        res.removeHeader('Content-Encoding');
        delete headers['content-encoding'];
      }

      _writeHead.apply(res, arguments);
    };

    res.write = function (data, encoding) {
      // Only run data through trumpet if we have HTML
      if (res.isHtml()) {
        if (res.isGzipped()) {
          gunzip.write(data);
        } else {
          tr.write(data, encoding);
        }
      } else {
        _write.apply(res, arguments);
      }
    };

    tr.on('data', function (buf) {
      _write.call(res, buf);
    });

    gunzip.on('data', function (buf) {
      tr.write(buf);
    });

    res.end = function (data, encoding) {
      if (res.isGzipped()) {
        gunzip.end(data);
      } else {
        tr.end(data, encoding);
      }
    };

    gunzip.on('end', function (data) {
      tr.end(data);
    });

    tr.on('end', function () {
      _end.call(res);
    });
  }

  function prepareSelectors(tr, selectors, req, res) {
 
    for (var i = 0; i < selectors.length; i++) {
      (function (selector, req, res) {
        var counter = 1; // Initialize counter for auto-incremented IDs
        var itemsIndexsToDisable = selector.itemsIndexsToDisable || [];
        var callback = selector.func;



        //console.log('itemsIndexsToDisable', itemsIndexsToDisable);
        var idPrefix = selector.idPrefix || 'untyped-';
        var callbackInvoker  = function(element) {
          // Execute the original callback function
      //    console.log(element );
           callback(element, req, res);

        //   element.setAttribute('type', "text/no-exec");
            ///   console.log('element', element);
      
        //  if (element && element.getAttribute) {
            // idPrefix = 'prefix-'; // Default prefix 'NNN' if not provided
            var id = idPrefix + counter;
            element.setAttribute('tgid', id);
            if (itemsIndexsToDisable.indexOf(counter) !== -1) {
                element.setAttribute('type', "text/no-exec");
            //    element.createWriteStream().end('');
           //     element.setAttribute('src', '');
                //element.setAttribute('async', 'true');
           }
    


            if (idPrefix == 'jac-js-') {
               // element.createWriteStream().end('HOLA');
           //    element.setAttribute('type', "text/partytown");
         //  element.setAttribute('type', "text/no-exec");
               //element.setAttribute('defer', 'true');
             //  element.setAttribute('async', 'true')

              if( typeof element.getAttribute('defer') === 'undefined') {
               //  element.setAttribute('defer', 'true');
               // element.setAttribute('type', "text/no-exec");
              }

            
            } 
               

    
                
 
             if (id == 'jac-preload-7') {

            //  <link rel="none" href="/_ui/desktop/theme-jacadi/css/fonts/raleway/raleway-600.woff2" as="font" type="font/woff2" tgid="jac-font-6">
              
                 // element.createWriteStream().end('');
                 element.setAttribute('rel', "preload");
                 element.setAttribute('href', "/medias/product-list-2037233-701-P-01.jpg?context=bWFzdGVyfGltYWdlc3wyMTYyMDF8aW1hZ2UvanBlZ3xoM2IvaDc2Lzk4ODM1ODU2NDI1MjYvcHJvZHVjdF9saXN0XzIwMzcyMzNfNzAxX1BfMDEuanBnfGViZjRhNzEwOWNmMWI5ZjZjYjA0ZDA4Y2M3YWJhZjA2YjczMDcyMjQ2MWQ2MmU1MjlhOTc4NmI2MzA0YTFkNDM");
                 element.setAttribute('as', "image");
                 element.setAttribute('type', "");


                 // element.setAttribute('type', "text/javascript");
                 //element.setAttribute('src', "/~partytown/partytown.js");
             //  element.setAttribute('defer', 'true');
              // element.setAttribute('type', "text/no-exec");
               //  element.setAttribute('async', 'true')
              }  else {

                if(id != 'jac-css-1') 
                {
                  element.setAttribute('href', "");
                }


              }
 
 
              

             if (idPrefix == 'jac-img-') {
            if (id === 'jac-img-50' ) {
                // element.createWriteStream().end('HOLA');

            
             
               // element.setAttribute('src', 'https://via.placeholder.com/300');
                
               // element.setAttribute('type', "text/no-exec");
               // element.setAttribute('defer', 'true');
              //  element.setAttribute('async', 'true')
             } else {
                //element.setAttribute('src', 'https://via.placeholder.com/300');
                element.setAttribute('loading', 'lazy');
             }
            }

    
           
            counter++;
          }
       // };

        tr.selectAll(selectors[i].query, callbackInvoker);

      })(selectors[i], req, res);
    }
  }

  return function harmonBinary(req, res, next) {
    var ignore = false;

    if (_htmlOnly) {
      var lowercaseUrl = req.url.toLowerCase();

      if ((lowercaseUrl.indexOf('.js', req.url.length - 3) !== -1) ||
          (lowercaseUrl.indexOf('.css', req.url.length - 4) !== -1)) {
        ignore = true;
      }
    }

    if (!ignore) {
      if (_reqSelectors.length) {
        prepareRequestSelectors(req, res);
      }

      if (_resSelectors.length) {
        prepareResponseSelectors(req, res);
      }
    }

    next();
  };
};
