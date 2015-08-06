module.exports = uglify;

var UglifyJS = require('uglify-js');

function uglify(source) {
  this.emit('progress', 'compressing javascript');
  minified = false;
  if (source.body) {
    source = source.body;
  }
  if (source.minified) {
    minified = soruce.minified;
  }

  // in case of local buffer
  source = source.toString();

  if (minified) {
    return source;
  } else {
    return UglifyJS.minify(source, {
      fromString: true,
    }).code; 
  }
}