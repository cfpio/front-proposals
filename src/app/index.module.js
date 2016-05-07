import { config } from './index.config'
import { routerConfig } from './index.route'
import { runBlock } from './index.run'
import { MainController } from './main/main.controller'
import { NavbarDirective } from '../app/components/navbar/navbar.directive'

const dependencies = ['ngSanitize', 'restangular', 'ui.router']

const app = angular.module('fr.lowtaux.webapp', dependencies)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)

document.addEventListener('DOMContentLoaded', () => {
  // Bootstrap application
  angular.bootstrap(document.documentElement, [app.name], {
    strictDi: true
  })
})
