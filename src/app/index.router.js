export const router = ($locationProvider, $urlRouterProvider, $stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('anonymous', {
      abstract: true,
      views: {
        layout: {
          template: `
            <section ui-view="view" class="Layout Layout--Anonymous"></section>
          `
        }
      }
    })
    .state('authenticated', {
      abstract: true,
      url: '/app',
      views: {
        layout: {
          template: `
            <section ui-view="view" class="Layout Layout--Authenticated"></section>
          `
        }
      }
    })
  // Routing
  $locationProvider.html5Mode(false)
  // Default redirection
  $urlRouterProvider.otherwise('/login')
}
