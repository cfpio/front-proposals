export const AuthenticationInterceptor = () => {

  let excludedStates = []

  const provider = {
    excludedStates: function(states) {
      return arguments.length ? (excludedStates = states, provider): excludedStates // ease method chaining, if need be
    },
    '$get': ($q, AuthenticationService, $state) => {
      'ngInject'

      return {
        responseError(rejection) {
          if (rejection.status === 401 && excludedStates.indexOf($state.transition.$to().name) === -1) {
            AuthenticationService.login()
          }
          return $q.reject(rejection)
        }
      }
    }
  }

  return provider
}
