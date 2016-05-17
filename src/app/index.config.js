export function config($compileProvider, $logProvider, $translateProvider) {
  'ngInject'
  // Enable log
  $logProvider.debugEnabled(true)
  // Enable debug
  $compileProvider.debugInfoEnabled(true)  
}
