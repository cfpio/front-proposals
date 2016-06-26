export const AuthenticationInterceptor = () => {

  let excludedRoutes = []

  const provider = {
    excludedRoutes: function(routes) {
      return arguments.length ? (excludedRoutes = routes, provider) : excludedRoutes // ease method chaining, if need be
    },
    '$get': ($q, AuthenticationService, $location) => {
      'ngInject'

      return {
        responseError(rejection) {
          if (rejection.status === 401 && excludedRoutes.indexOf($location.path()) === -1) {
            AuthenticationService.login()
          }
          return $q.reject(rejection)
        }
      }
    }
  }

  return provider
}
