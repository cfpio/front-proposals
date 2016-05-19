export const router = ($locationProvider, $urlRouterProvider, $stateProvider) => {
  'ngInject'

  // Routing
  $locationProvider.html5Mode(false)
  // Default redirection
  $urlRouterProvider.otherwise('/profile')
}
