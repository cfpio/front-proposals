import { config } from './index.config'
import { router } from './index.router'
import { MainController } from './main/main.controller'

import { zetapush, initialize, client } from './zetapush'

import { login } from './components/login/login.module'

const dependencies = ['ngSanitize', 'ui.router', zetapush.name]

const modules = [login.name]

const app = angular.module('fr.lowtaux.app', [...dependencies, ...modules])
  .constant('moment', moment)
  .config(config)
  .config(router)
  .controller('MainController', MainController)
  .run(($log) => {
    'ngInject'

    $log.debug('runBlock end')
  })

document.addEventListener('DOMContentLoaded', () => {
  // Bootstrap application
  window.client = client
  initialize.then(() => {
    console.debug('App Ready To Initialize')
    angular.bootstrap(document.documentElement, [ app.name ], {
      strictDi: true
    })
  }, () => {
    console.error('Unable to connect to ZetaPush API')
  })
})
