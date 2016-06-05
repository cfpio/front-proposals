export const AuthenticationService = () => {

  let authUrl

  let provider = {
    authUrl: function(url) {
      return arguments.length ? (authUrl = url, provider) : authUrl // ease method chaining, if need be
    },
    '$get': ($window, $location) => {
      'ngInject'
      return {
        getLoginUrl,
        getLogoutUrl,
        login,
        logout
      }

      function getLoginUrl() {
        return `${authUrl}?target=${encodeURIComponent($location.absUrl())}`
      }

      function getLogoutUrl() {
        return `${authUrl}/logout`
      }

      function login() {
        $window.location = getLoginUrl()
      }

      function logout() {
        $window.location = getLogoutUrl()
      }
    }
  }

  return provider
}
