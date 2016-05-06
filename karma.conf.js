const path = require('path')
const conf = require('./gulp/conf')

const _ = require('lodash')
const wiredep = require('wiredep')

const pathSrcHtml = [
  path.join(conf.paths.src, '/**/*.html')
]

const listFiles = () => {
  const wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  })

  const patterns = wiredep(wiredepOptions).js
    .concat([
      path.join(conf.paths.tmp, '/serve/app/index.module.js')
    ])
    .concat(pathSrcHtml)

  const files = patterns.map((pattern) => {
    return {
      pattern: pattern
    }
  })
  files.push({
    pattern: path.join(conf.paths.src, '/assets/**/*'),
    included: false,
    served: true,
    watched: false
  })
  return files
}

module.exports = (config) => {

  const configuration = {
    files: listFiles(),

    singleRun: true,

    autoWatch: false,

    ngHtml2JsPreprocessor: {
      stripPrefix: conf.paths.src + '/',
      moduleName: 'front'
    },

    logLevel: 'WARN',

    frameworks: ['phantomjs-shim', 'jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-phantomjs-shim',
      'karma-coverage',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    reporters: ['progress'],

    proxies: {
      '/assets/': path.join('/base/', conf.paths.src, '/assets/')
    }
  }

  // This is the default preprocessors configuration for a usage with Karma cli
  // The coverage preprocessor is added in gulp/unit-test.js only for single tests
  // It was not possible to do it there because karma doesn't let us now if we are
  // running a single test or not
  configuration.preprocessors = {}
  pathSrcHtml.forEach((path) => {
    configuration.preprocessors[path] = ['ng-html2js']
  })

  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if (configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
    configuration.browsers = ['chrome-travis-ci']
  }

  config.set(configuration)
}
