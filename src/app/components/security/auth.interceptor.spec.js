describe('AuthenticationInterceptor', () => {

  let service, $q, AuthenticationService

  beforeEach(angular.mock.module('io.cfp.front.components.security'))

  beforeEach(inject((_$q_, AuthenticationInterceptor, _AuthenticationService_) => {
    service = AuthenticationInterceptor
    $q = _$q_
    AuthenticationService = _AuthenticationService_
  }))

  describe('responseError', () => {

    const authUrl = 'https://fake-auth.cfp.io'

    describe('with anything but a 401 status code', ()=> {

      beforeEach(() => {
        spyOn($q, 'reject').and.callThrough()
      })

      it('should reject response', () => {

        const response = {status: 500}

        const result = service.responseError(response)

        expect($q.reject).toHaveBeenCalledWith(response)
        expect(result.$$state.value).toBe(response)
      })
    })

    describe('with 401 status code', () => {

      beforeEach(() => {
        spyOn($q, 'reject')
        spyOn(AuthenticationService, 'login')
      })

      it('should call AuthenticationService.login()', () => {

        const response = {
          status: 401
        }

        const result = service.responseError(response)

        expect(result).toBeUndefined()
        expect(AuthenticationService.login).toHaveBeenCalled()
        expect($q.reject).not.toHaveBeenCalled()
      })
    })
  })
})
