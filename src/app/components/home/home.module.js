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
        component: 'viewHome'
      })
      .state('welcome', {
        parent: 'home',
        url: '/home',
        views: {
          'top-menu': {
            component: 'topMenu'
          },
          '': {
            component: 'welcome'
          }
        }
      })
  })
