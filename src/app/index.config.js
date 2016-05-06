export function config($compileProvider, $logProvider) {
  'ngInject'
  // Enable log
  $logProvider.debugEnabled(true)
  // Enable debug
  $compileProvider.debugInfoEnabled(true)
}
