import { ViewHome } from './view-home'

export const home = angular
  .module('io.cfp.front.components.home', [
    'ui.router'
  ])

  .component('viewHome', ViewHome)

  .config(($stateProvider) => {
    'ngInject'

    // Declare routes
    $stateProvider
      .state('home', {
        url: '/home',
        template: '<view-home></view-home>'
      })
  })
