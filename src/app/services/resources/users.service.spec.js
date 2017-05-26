import angular from 'angular'
import 'angular-mocks'

describe('Users', () => {

  let service, sanitize
  let $httpBackend, $rootScope

  beforeEach(angular.mock.module('io.cfp.front.services.resource', ($provide, sanitizeProvider) => {
    const sanitize = sanitizeProvider.$get()
    const spiedSanitize = jasmine.createSpy().and.callFake(sanitize)
    $provide.value('sanitize', spiedSanitize)
  }))

  beforeEach(angular.mock.inject((Users, _Restangular_, _$httpBackend_, _$rootScope_, _sanitize_) => {
    service = Users
    $httpBackend = _$httpBackend_
    $rootScope = _$rootScope_
    sanitize = _sanitize_
  }))

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation()
    $httpBackend.verifyNoOutstandingRequest()
  })

  describe('me()', () => {

    beforeEach(() => {
      spyOn($rootScope, '$emit')
    })

    it('should retrieve connected user info, sanitize "bio", add a fake id and and emit an event', () => {

      $httpBackend.expectGET('/users/me').respond({})

      service.me().then((data) => {
        expect(sanitize).toHaveBeenCalledWith(data, ['bio'])
        expect(data.id).toBe('me')
        expect($rootScope.$emit).toHaveBeenCalledWith('users:me:retrieved', data)
      })

      $httpBackend.flush()
    })
  })

  describe('saving connected user profile', () => {

    it('should remove fake id added on retrieval', () => {

      const user = {}
      $httpBackend.expectGET('/users/me').respond(user)
      $httpBackend.expectPUT('/users/me', (body) => body.id === undefined).respond()

      service.me().then((data) => {
        data.save()
      })

      $httpBackend.flush()
    })
  })
})
