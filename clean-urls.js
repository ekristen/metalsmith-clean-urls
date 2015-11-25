var path = require('path')

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

module.exports = function(){
  return function drafts(files, metalsmith, done){
    Object.keys(files).forEach(function(file) {
      if (file.endsWith('.html')) {
        var baseFilename = path.basename(file)
        if (baseFilename == 'index.html') {
          return
        }

        var newFilename = file.replace('.html', '/index.html')
        files[newFilename] = files[file]
        delete files[file]
      }
    })

    done();
  };
}
