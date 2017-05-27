export const AuthenticationService = () => {

  let authUrl

  const provider = {
    authUrl(url) {
      /* eslint no-return-assign: 0 */
      return arguments.length ? (authUrl = url, provider) : authUrl // ease method chaining, if need be
    },
    $get: ($window, $state) => {
      'ngInject'

      function getLoginUrl() {
        const targetState = $state.transition ? $state.transition.$to() : $state.current
        return `${authUrl}?target=${encodeURIComponent($state.href(targetState.name, targetState.params, {absolute: true}))}`
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
