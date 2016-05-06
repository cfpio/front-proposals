const path = require('path')
const gulp = require('gulp')
const conf = require('./conf')

const browserSync = require('browser-sync')
const webpack = require('webpack-stream')

const $ = require('gulp-load-plugins')()

const webpackWrapper = (watch, test, callback) => {
  const webpackOptions = {
    watch: watch,
    module: {
      preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}],
      loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'babel-loader?presets[]=es2015']}]
    },
    output: { filename: 'index.module.js' }
  }

  if (watch) {
    webpackOptions.devtool = 'inline-source-map'
  }

  const webpackChangeHandler = (error, stats) => {
    if (error) {
      conf.errorHandler('Webpack')(error)
    }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }))
    browserSync.reload()
    if (watch) {
      watch = false
      callback()
    }
  }

  const sources = [ path.join(conf.paths.src, '/app/index.module.js') ]
  if (test) {
    sources.push(path.join(conf.paths.src, '/app/**/*.spec.js'))
  }

  return gulp.src(sources)
    .pipe(webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')))
}

gulp.task('scripts', () => {
  return webpackWrapper(false, false)
})

gulp.task('scripts:watch', ['scripts'], (callback) => {
  return webpackWrapper(true, false, callback)
})

gulp.task('scripts:test', () => {
  return webpackWrapper(false, true)
})

gulp.task('scripts:test-watch', ['scripts'], (callback) => {
  return webpackWrapper(true, true, callback)
})
