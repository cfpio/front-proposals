import { FormLogin } from './form-login'
import { ViewLogin } from './view-login'

export const login = angular
  .module('io.cfp.front.components.login', [
    'ui.router'
  ])

  .component('cfpFormLogin', FormLogin)
  .component('cfpViewLogin', ViewLogin)

  .config(($stateProvider) => {
    'ngInject'

    // Declare routes
    $stateProvider
      .state('anonymous.login', {
        url: '/login',
        views: {
          view: {
            template: '<cfp-view-login></cfp-view-login>'
          }
        }
      })
  })
