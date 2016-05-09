export const router = ($stateProvider, $urlRouterProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('anonymous', {
      abstract: true,
      views: {
        layout: {
          template: '<section ui-view="view" class="Layout Layout--Anonymous"></section>'
        }
      }
    })
    .state('authenticated', {
      abstract: true,
      url: '/app',
      views: {
        layout: {
          template: '<section ui-view="view" class="Layout Layout--Authenticated"></section>'
        }
      }
    })

  $urlRouterProvider.otherwise('/login')
}
