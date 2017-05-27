export const router = ($locationProvider, $urlRouterProvider) => {
  'ngInject'

  // Routing
  $locationProvider.html5Mode(false)
  // Default redirection
  $urlRouterProvider.otherwise('/home')
}
