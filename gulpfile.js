/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */
const gulp = require('gulp')
const wrench = require('wrench')

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter((file) => {
  return (/\.(js|coffee)$/i).test(file)
}).map((file) => {
  require('./gulp/' + file)
})

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], () => {
  gulp.start('build')
})
