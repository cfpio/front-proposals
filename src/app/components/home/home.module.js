import {Home} from './home'
import {TopMenu} from './top-menu/top-menu'
import {Welcome} from './welcome/welcome'

export const home = angular
  .module('io.cfp.front.components.home', [
    'ui.router'
  ])

  .component('viewHome', Home)
  .component('topMenu', TopMenu)
  .component('welcome', Welcome)

  .config(($stateProvider) => {
    'ngInject'

    // Declare routes
    $stateProvider
      .state('home', {
        abstract: true,
        template: '<view-home></view-home>'
      })
      .state('welcome', {
        parent: 'home',
        url: '/home',
        template: '<welcome></welcome>'
      })
  })
