export const AuthenticationService = () => {

  let authUrl

  let provider = {
    authUrl: function(url) {
      console.log(url)
      return arguments.length ? (authUrl = url, provider) : authUrl // ease method chaining, if need be
    },
    '$get': ($window, $location) => {
      'ngInject'
      return {
        login: (url = authUrl) => {
          $window.location = `${url}?target=${encodeURIComponent($location.absUrl())}`
        },
        logout: () => {
          $window.location = `${authUrl}/logout`
        }
      }
    }
  }

  return provider
}
