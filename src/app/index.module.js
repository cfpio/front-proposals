import {config} from './index.config'
import {router} from './index.router'
import {i18n} from './index.language'

import {directives} from './directives/directives.module'
import {components} from './components/components.module'

const dependencies = [
  'ngSanitize',
  'restangular',
  'ui.router',
  'pascalprecht.translate',
  'hc.marked'
]

const app = angular.module('io.cfp.front', [...dependencies, components.name, directives.name])
  .constant('moment', moment)
  .config(config)
  .config(router)
  .config(i18n)

  .run(($log) => {
    'ngInject'

    $log.debug('App Initialized')
  })

const configLoaded = fetch('/infra', {method: 'HEAD'})
  .then(response => {
    app.constant('Infra', {
      apiServer: response.headers.get('X-API-Server'),
      authServer: response.headers.get('X-Authentication-Server')
    })
  })

document.addEventListener('DOMContentLoaded', () => {
  configLoaded.then(() => {
    angular.bootstrap(document.documentElement, [app.name], {
      strictDi: true
    })
  })
})
