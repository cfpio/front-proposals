export const AuthenticationInterceptor = ($log, $q) => {
  'ngInject'

  return {
    request(config) {
      $log.log('AuthenticationInterceptor::request', config)
      return config
    },
    requestError(rejection) {
      $log.log('AuthenticationInterceptor::requestError', rejection)
      return $q.reject(rejection)
    },
    response(response) {
      $log.log('AuthenticationInterceptor::response', response)
      return response
    },
    responseError(rejection) {
      $log.log('AuthenticationInterceptor::responseError', rejection)
      // TODO Handle 401 Error and redirect to login
      return $q.reject(rejection)
    }
  }
}
