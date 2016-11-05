export const AuthenticationService = () => {

  let authUrl

  const provider = {
    authUrl: function(url) {
      return arguments.length ? (authUrl = url, provider) : authUrl // ease method chaining, if need be
    },
    '$get': ($window, $location) => {
      'ngInject'

      function getLoginUrl() {
        return `${authUrl}?target=${encodeURIComponent($location.absUrl())}`
      }

      function getLogoutUrl() {
        return `${authUrl}/logout`
      }

      return {
        getLoginUrl,
        getLogoutUrl,
        login: () => {
          $window.location = getLoginUrl()
        },
        logout: () => {
          $window.location = getLogoutUrl()
        }
      }
    }
  }

  return provider
}
