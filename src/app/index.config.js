export const config = ($compileProvider, $logProvider, $translateProvider, $httpProvider, AuthenticationServiceProvider,
                       AuthenticationInterceptorProvider, Infra, RestangularProvider, $qProvider) => {

  'ngInject'

  // Enable log
  $logProvider.debugEnabled(true)
  // Enable debug
  $compileProvider.debugInfoEnabled(true)

  // Used to forward auth cookie on CORS
  $httpProvider.defaults.withCredentials = true

  AuthenticationInterceptorProvider.excludedStates(['welcome'])
  AuthenticationServiceProvider.authUrl(Infra.authServer)

  RestangularProvider.setBaseUrl(Infra.apiServer + '/api')

  $qProvider.errorOnUnhandledRejections(false) // Disable "Possibly unhandled rejection…" errors
}
