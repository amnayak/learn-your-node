    var crypto = require('crypto');
    var stream_decrypt = crypto.createDecipher(process.argv[2], process.argv[3]);
    var zip = require('zlib');
    var tar = require('tar');
    var concat = require('concat-stream');
    var parser = tar.Parse();


    parser.on('entry', function (e) {
    	if (e.type !== 'File') return;
        var h = crypto.createHash('md5', { encoding: 'hex' })
        e.pipe(h).pipe(concat(function (hash) {
          console.log(hash + ' ' + e.path);
      }));

    });

    
 process.stdin
      .pipe(stream_decrypt)
      .pipe(zip.createGunzip())
      .pipe(parser)
  ;
