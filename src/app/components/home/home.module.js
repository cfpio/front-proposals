import {Home} from './home'
import {TopMenu} from './top-menu/top-menu'
import {Welcome} from './welcome/welcome'

export const home = angular
  .module('io.cfp.front.components.home', [
    'ui.router',
    'io.cfp.front.services.resource'
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
          application: (Restangular) => Restangular.one('application').get(),
          tracks: (Tracks) => Tracks.getList(),
          formats: (Formats) => Formats.getList()
        }
      })
      .state('welcome', {
        url: '/home',
        parent: 'home',
        resolve: {
          user: (Users) => Users.me().then(user => user, () => null), // no need to be authenticated for welcome page,
          drafts: (user, Drafts) => user ? Drafts.getList() : null,
          proposals: (user, Proposals) => user ? Proposals.getList() : null
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
          user: (Users) => Users.me(),
          drafts: (Drafts) => Drafts.getList(),
          proposals: (Proposals) => Proposals.getList()
        }
      })
  })
