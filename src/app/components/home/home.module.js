import {Home} from './home'
import {TopMenu} from './top-menu/top-menu'
import {Welcome} from './welcome/welcome'

export const home = angular
  .module('io.cfp.front.components.home', [
    'ui.router'
  ])

  .component('home', Home)
  .component('topMenu', TopMenu)
  .component('welcome', Welcome)

  .config(($stateProvider) => {
    'ngInject'

    // Declare routes
    $stateProvider
      .state('home', {
        abstract: true,
        component: 'home',
        resolve: {
          application: (Restangular) => Restangular.one('application').get()
        }
      })
      .state('welcome', {
        url: '/home',
        parent: 'home',
        resolve: {
          user: (Restangular) => { // no need to be authenticated for welcome page
            return Restangular.one('users', 'me').get().then(user => user, () => null)
          },
          tracks: (Restangular) => Restangular.all('tracks').getList()
        },
        views: {
          'top-menu': {
            component: 'topMenu'
          },
          '': {
            component: 'welcome'
          }
        }
      })
      .state('home.secured', { // parent state for all secured pages
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {
          user: (Restangular) => Restangular.one('users', 'me').get()
        }
      })
  })
