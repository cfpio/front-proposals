import angular from 'angular'
import 'angular-mocks'

describe('AuthenticationService', () => {

  let service, serviceProvider, $window, $state

  beforeEach(angular.mock.module('io.cfp.front.services.security', ($provide, AuthenticationServiceProvider) => {

    $window = {} // let's make a fake $window service
    $state = { // let's make a fake $state service
      href: () => {
      }
    }

    $provide.value('$window', $window)
    $provide.value('$state', $state)

    serviceProvider = AuthenticationServiceProvider
  }))

  beforeEach(angular.mock.inject(AuthenticationService => {
    service = AuthenticationService
  }))

  describe('provider', () => {

    it('must be configured', () => {

      const url = 'http://fake-url'

      const result = serviceProvider.authUrl(url)

      expect(result).toBe(serviceProvider) // usefull for method chaining
      expect(serviceProvider.authUrl()).toEqual(url)
    })
  })

  describe('', () => {

    const authUrl = 'https://fake-auth.cfp.io'

    beforeEach(() => {
      serviceProvider.authUrl(authUrl)
    })

    describe('login', () => {

      const currentUrl = 'https://test.cfp.io/#some-fake-page'

      beforeEach(() => {
        $state.current = {name: 'current-state', params: {foo: 'bar'}}

        spyOn($state, 'href').and.returnValue(currentUrl)
      })

      it('should change location to auth URL and set target param to current URL', () => {

        const currentState = $state.current
        service.login()

        expect($state.href).toHaveBeenCalledWith(currentState.name, currentState.params, {absolute: true})
        expect($window.location).toBe(`${authUrl}?target=${encodeURIComponent(currentUrl)}`)
      })
    })

    describe('login during a state transition', () => {

      const targetState = {name: 'target-state', params: {foo: 'bar'}}
      const targetUrl = 'https://test.cfp.io/#some-fake-page'

      beforeEach(() => {
        $state.transition = {
          $to: () => {
          }
        }
        spyOn($state.transition, '$to').and.returnValue(targetState)
        spyOn($state, 'href').and.returnValue(targetUrl)
      })

      it('should change location to auth URL and set target param to transition target', () => {

        service.login()

        expect($state.href).toHaveBeenCalledWith(targetState.name, targetState.params, {absolute: true})
        expect($window.location).toBe(`${authUrl}?target=${encodeURIComponent(targetUrl)}`)
      })
    })

    describe('logout', () => {

      it('should change location to logout URL', () => {

        service.logout()

        expect($window.location).toBe(`${authUrl}/logout`)
      })
    })
  })
})
