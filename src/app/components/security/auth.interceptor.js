export const AuthenticationInterceptor = ($q, AuthenticationService) => {
  'ngInject'

  return {
    responseError(rejection) {
      if (rejection.status === 401) {
        AuthenticationService.login()
        return // keep this!
      }
      return $q.reject(rejection)
    }
  }
}
