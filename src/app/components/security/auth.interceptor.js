export const AuthenticationInterceptor = ($q, AuthenticationService) => {
  'ngInject'

  return {
    responseError(rejection) {
      if (rejection.status === 401) {
        let authUrl = rejection.headers('Location')
        if (authUrl) {
          AuthenticationService.login(authUrl)
          return // keep this!
        }
      }
      return $q.reject(rejection)
    }
  }
}
