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
        template: '<view-home></view-home>' // TODO give a try to UI-Router 1.0 alpha to be able to route to components
                                            // directly (see https://github.com/angular-ui/ui-router/issues/2627)
      })
      .state('home.welcome', {
        url: '/home',
        views: {
          'top-menu': {
            template: '<top-menu></top-menu>'
          },
          '': {
            template: '<welcome></welcome>'
          }
        }
      })
  })
