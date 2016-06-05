import {config} from './index.config'
import {router} from './index.router'
import {i18n} from './index.language'

import {components} from './components/components.module'

import {MainController} from './main/main.controller'

const dependencies = [
  'ngSanitize',
  'restangular',
  'ui.router',
  'pascalprecht.translate'
]

const app = angular.module('io.cfp.front', [...dependencies, components.name])
  .constant('moment', moment)
  .config(config)
  .config(router)
  .config(i18n)

  .controller('MainController', MainController)

  // /!\ Do not remove the $state. Without it, the route is not initially loaded
  // because the ui-view is inside ng-included template
  .run(($log, $state) => {
    'ngInject'

    $log.debug('App Initialized')
  })

const configLoaded = fetch('/api/application')
  .then(response => response.json())
  .then(appConfig => {
    app.constant('AppConfig', appConfig)
  })

document.addEventListener('DOMContentLoaded', () => {
  configLoaded.then(() => {
    angular.bootstrap(document.documentElement, [app.name], {
      strictDi: true
    })
  })
})
