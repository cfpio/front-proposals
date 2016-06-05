import { FormProfile } from './form-profile'
import { ViewProfile } from './view-profile'

export const profile = angular
  .module('io.cfp.front.components.profile', [
    'ui.router'
  ])

  .component('cfpFormProfile', FormProfile)
  .component('cfpViewProfile', ViewProfile)

  .config(($stateProvider) => {
    'ngInject'

    // Declare routes
    $stateProvider
      .state('profile', {
        parent: 'home',
        url: '/profile',
        template: '<cfp-view-profile></cfp-view-profile>'
      })
  })
