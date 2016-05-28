export const config = ($compileProvider, $logProvider, $translateProvider, AuthenticationServiceProvider, AppConfig) => {
  'ngInject'

  // Enable log
  $logProvider.debugEnabled(true)
  // Enable debug
  $compileProvider.debugInfoEnabled(true)

  AuthenticationServiceProvider.authUrl(AppConfig.authServer)
}
