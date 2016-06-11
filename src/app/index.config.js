export const config = ($compileProvider, $logProvider, $translateProvider, $httpProvider, AuthenticationServiceProvider,
                       AppConfig, RestangularProvider) => {

  'ngInject'

  // Enable log
  $logProvider.debugEnabled(true)
  // Enable debug
  $compileProvider.debugInfoEnabled(true)

  //used to forward auth cookie on CORS
  $httpProvider.defaults.withCredentials = true

  AuthenticationServiceProvider.authUrl(AppConfig.authServer)

  RestangularProvider.setBaseUrl(AppConfig.apiServer + '/api')
}
