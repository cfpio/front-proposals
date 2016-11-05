describe('AuthenticationService', () => {

  let service, serviceProvider, $window, $location

  beforeEach(angular.mock.module('io.cfp.front.services.security', ($provide, AuthenticationServiceProvider)=> {

    $window = {} // let's make a fake $window service
    $location = {} // and a fake $location service

    $provide.value('$window', $window)
    $provide.value('$location', $location)

    serviceProvider = AuthenticationServiceProvider
  }))

  beforeEach(inject(AuthenticationService => {
    service = AuthenticationService
  }))

  describe('provider', () => {

    it('must be configured', () => {

      let url = 'http://fake-url'

      let result = serviceProvider.authUrl(url)

      expect(result).toBe(serviceProvider) // usefull for method chaining
      expect(serviceProvider.authUrl()).toEqual(url)
    })
  })

  describe('', () => {

    const currentUrl = 'https://test.cfp.io/#some-fake-page'
    const authUrl = 'https://fake-auth.cfp.io'

    beforeEach(() => {
      $location.absUrl = jasmine.createSpy().and.returnValue(currentUrl)
      serviceProvider.authUrl(authUrl)
    })

    describe('login', () => {

      it('should change location to auth URL in parameter', () => {

        service.login(authUrl)

        expect($window.location).toBe(`${authUrl}?target=${encodeURIComponent(currentUrl)}`)
      })
    })

    describe('logout', () => {

      it('should change location to logout URL saved after a previous login', () => {

        service.logout()

        expect($window.location).toBe(`${authUrl}/logout`)
      })
    })
  })
})
