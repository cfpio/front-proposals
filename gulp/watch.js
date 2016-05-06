const path = require('path')
const gulp = require('gulp')
const conf = require('./conf')

const browserSync = require('browser-sync')

function isOnlyChange(event) {
  return event.type === 'changed'
}

gulp.task('watch', ['scripts:watch', 'inject'], () => {

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload'])

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join(conf.paths.src, '/app/**/*.scss')
  ], (event) => {
    if (isOnlyChange(event)) {
      gulp.start('styles-reload')
    }
    else {
      gulp.start('inject-reload')
    }
  })

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), (event) => {
    browserSync.reload(event.path)
  })
})
