import { config } from './index.config'
import { routerConfig } from './index.route'
import { runBlock } from './index.run'
import { MainController } from './main/main.controller'
import { NavbarDirective } from '../app/components/navbar/navbar.directive'
import { langConfig } from './index.language'

const dependencies = ['ngSanitize', 'restangular', 'ui.router', 'pascalprecht.translate']

const app = angular.module('io.cfp.front', dependencies)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .config(langConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)

document.addEventListener('DOMContentLoaded', () => {
})
fetch('/api/settings/serviceproviders')
  .then((response) => response.json())
  .then((Config) => {
    // Declare serviceproviders as constant
    app.constant('Config', Config)
    // Bootstrap application
    angular.bootstrap(document.documentElement, [app.name], {
      strictDi: true
    })
  })
