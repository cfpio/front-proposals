export const AuthenticationService = () => {

  let authUrl

  let provider = {
    authUrl: function(url) {
      return arguments.length ? (authUrl = url, provider) : authUrl // ease method chaining, if need be
    },
    '$get': ($window, $location) => {
      'ngInject'
      return {
        login: () => {
          $window.location = `${authUrl}?target=${encodeURIComponent($location.absUrl())}`
        },
        logout: () => {
          $window.location = `${authUrl}/logout`
        }
      }
    }
  }

  return provider
}
