describe('AuthenticationInterceptor', () => {

  let service, serviceProvider, $location, $q, AuthenticationService

  beforeEach(angular.mock.module('io.cfp.front.components.security', ($provide, AuthenticationInterceptorProvider)=> {

    $location = { // let's make a fake $location service
      path: ()=> ''
    }

    $provide.value('$location', $location)

    serviceProvider = AuthenticationInterceptorProvider
  }))

  beforeEach(inject((_$q_, AuthenticationInterceptor, _AuthenticationService_) => {
    service = AuthenticationInterceptor
    $q = _$q_
    AuthenticationService = _AuthenticationService_
  }))

  describe('provider', () => {

    it('can be configured with excluded routes', () => {

      let excludedRoutes = ['/some/route', '/some/other/route']

      let result = serviceProvider.excludedRoutes(excludedRoutes)

      expect(result).toBe(serviceProvider) // usefull for method chaining
      expect(serviceProvider.excludedRoutes()).toBe(excludedRoutes)
    })
  })

  describe('responseError', () => {

    beforeEach(()=> {
      spyOn(AuthenticationService, 'login')
      spyOn($q, 'reject').and.callThrough()
    })

    describe('with anything but a 401 status code', ()=> {

      beforeEach(() => {
        spyOn($location, 'path').and.callThrough()
      })

      it('should reject response', () => {

        const response = {status: 500}

        const result = service.responseError(response)

        expect($q.reject).toHaveBeenCalledWith(response)
        expect(AuthenticationService.login).not.toHaveBeenCalled()
        expect($location.path).not.toHaveBeenCalled()
        expect(result.$$state.value).toBe(response)
      })
    })

    describe('with 401 status code', () => {

      const excludedRoute = '/excluded-route'
      const response = {
        status: 401
      }

      beforeEach(() => {
        spyOn($location, 'path').and.returnValue(excludedRoute)
      })

      it('should call AuthenticationService.login()', () => {

        const result = service.responseError(response)

        expect($location.path).toHaveBeenCalled()
        expect(AuthenticationService.login).toHaveBeenCalled()
        expect($q.reject).toHaveBeenCalledWith(response)
        expect(result.$$state.value).toBe(response)
      })

      describe('when current location path is excluded', ()=> {

        beforeEach(() => {
          serviceProvider.excludedRoutes([excludedRoute])
        })

        it('should reject response', () => {

          const result = service.responseError(response)

          expect($location.path).toHaveBeenCalled()
          expect(AuthenticationService.login).not.toHaveBeenCalled()
          expect($q.reject).toHaveBeenCalledWith(response)
          expect(result.$$state.value).toBe(response)
        })
      })
    })
  })
})
