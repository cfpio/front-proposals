import {Home} from './home'

export const home = angular
  .module('io.cfp.front.components.home', [
    'ui.router'
  ])

  .component('home', Home)

  .config(($stateProvider) => {
    'ngInject'

    // Declare routes
    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>' // TODO give a try to UI-Router 1.0 alpha to be able to route to components
                                            // directly (see https://github.com/angular-ui/ui-router/issues/2627)
      })
  })
