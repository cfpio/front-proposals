import { config } from './index.config'
import { router } from './index.router'
import { i18n } from './index.language'

import { components } from './components/components.module'

import { MainController } from './main/main.controller'
import { NavbarDirective } from '../app/components/navbar/navbar.directive'

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
  .directive('acmeNavbar', NavbarDirective)

  .run(($log) => {
    'ngInject'

    $log.debug('App Initialized')
  })

document.addEventListener('DOMContentLoaded', () => {
  angular.bootstrap(document.documentElement, [app.name], {
    strictDi: true
  })
})
