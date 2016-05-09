import { zpViewLogin } from './zp-view-login'

export const login = angular
  .module('fr.lowtaux.app.components.login', [
    'ui.router'
  ])

  .component('zpViewLogin', zpViewLogin)

  .config(($stateProvider) => {
    'ngInject'
    // Declare routes
    $stateProvider
      .state('anonymous.login', {
        url: '/login',
        views: {
          view: {
            template: '<zp-view-login></zp-view-login>'
          }
        }
      })
  })
