export const config = ($compileProvider, $logProvider, $translateProvider, $httpProvider, AuthenticationServiceProvider,
                       AuthenticationInterceptorProvider, Infra, RestangularProvider) => {

  'ngInject'

  // Enable log
  $logProvider.debugEnabled(true)
  // Enable debug
  $compileProvider.debugInfoEnabled(true)

  //used to forward auth cookie on CORS
  $httpProvider.defaults.withCredentials = true

  AuthenticationInterceptorProvider.excludedRoutes(['/home'])
  AuthenticationServiceProvider.authUrl(Infra.authServer)

  RestangularProvider.setBaseUrl(Infra.apiServer + '/api')
}
