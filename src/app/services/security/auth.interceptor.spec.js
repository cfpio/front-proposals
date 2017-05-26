import angular from 'angular'
import 'angular-mocks'

describe('AuthenticationInterceptor', () => {

  /* eslint angular/no-private-call: 0 */

  let service, serviceProvider, $state, $q, AuthenticationService

  beforeEach(angular.mock.module('io.cfp.front.services.security', ($provide, AuthenticationInterceptorProvider) => {

    $state = { // let's make a fake $state service
      transition: {
        $to: () => undefined
      }
    }

    $provide.value('$state', $state)

    serviceProvider = AuthenticationInterceptorProvider
  }))

  beforeEach(angular.mock.inject((_$q_, AuthenticationInterceptor, _AuthenticationService_) => {
    service = AuthenticationInterceptor
    $q = _$q_
    AuthenticationService = _AuthenticationService_
  }))

  describe('provider', () => {

    it('can be configured with excluded states', () => {

      const excludedStates = ['some.state', 'some.other.state']

      const result = serviceProvider.excludedStates(excludedStates)

      expect(result).toBe(serviceProvider) // usefull for method chaining
      expect(serviceProvider.excludedStates()).toBe(excludedStates)
    })
  })

  describe('responseError', () => {

    beforeEach(() => {
      spyOn(AuthenticationService, 'login')
      spyOn($q, 'reject').and.callThrough()
    })

    describe('with anything but a 401 status code', () => {

      beforeEach(() => {
        spyOn($state.transition, '$to').and.callThrough()
      })

      it('should reject response', () => {

        const response = {status: 500}

        const result = service.responseError(response)

        expect($q.reject).toHaveBeenCalledWith(response)
        expect(AuthenticationService.login).not.toHaveBeenCalled()
        expect($state.transition.$to).not.toHaveBeenCalled()
        expect(result.$$state.value).toBe(response)
      })
    })

    describe('with 401 status code', () => {

      const excludedState = 'excluded-state'
      const response = {
        status: 401
      }

      beforeEach(() => {
        spyOn($state.transition, '$to').and.returnValue({name: 'excluded-state'})
      })

      it('should call AuthenticationService.login()', () => {

        const result = service.responseError(response)

        expect($state.transition.$to).toHaveBeenCalled()
        expect(AuthenticationService.login).toHaveBeenCalled()
        expect($q.reject).toHaveBeenCalledWith(response)
        expect(result.$$state.value).toBe(response)
      })

      describe('when target state is excluded', () => {

        beforeEach(() => {
          serviceProvider.excludedStates([excludedState])
        })

        it('should reject response', () => {

          const result = service.responseError(response)

          expect($state.transition.$to).toHaveBeenCalled()
          expect(AuthenticationService.login).not.toHaveBeenCalled()
          expect($q.reject).toHaveBeenCalledWith(response)
          expect(result.$$state.value).toBe(response)
        })
      })
    })
  })
})
