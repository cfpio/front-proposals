const conf = require('./gulp.conf');

module.exports = function() {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ],
      middleware: (req, res, next) => {
        if (req.url === '/infra') {
          res.writeHead(200, {
            'X-API-Server': 'https://api.cfp.io',
            'X-Authentication-Server': 'https://auth.cfp.io'
            // 'X-API-Server': 'http://dev-front.cfp.io:8080',
            // 'X-Authentication-Server': 'http://dev-front.cfp.io:46001'
          })
          res.end()
        }
        else {
          next()
        }
      }
    },
    open: false
  };
};
