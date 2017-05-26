import angular from 'angular'

import {EditProfile} from './edit-profile'

export const profile = angular
  .module('io.cfp.front.components.profile', [
    'ui.router'
  ])

  .component('editProfile', EditProfile)

  .config(($stateProvider) => {
    'ngInject'

    // Declare routes
    $stateProvider
      .state('profile', {
        parent: 'home.secured',
        url: '/profile',
        component: 'editProfile'
      })
  })
