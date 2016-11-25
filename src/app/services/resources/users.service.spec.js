describe('Users', () => {

  let service, Restangular
  let $httpBackend, $rootScope

  beforeEach(angular.mock.module('io.cfp.front.services.resource'))

  beforeEach(inject((Users, _Restangular_, _$httpBackend_, _$rootScope_) => {
    service = Users
    Restangular = _Restangular_
    $httpBackend = _$httpBackend_
    $rootScope = _$rootScope_
  }))

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation()
    $httpBackend.verifyNoOutstandingRequest()
  })

  describe('me()', () => {

    beforeEach(() => {
      spyOn($rootScope, '$emit')
    })

    it('should retrieve connected user info, add a fake id and and emit an event', () => {

      $httpBackend.expectGET('/users/me').respond({})

      service.me().then((data) => {
        expect(data.id).toBe('me')
        expect($rootScope.$emit).toHaveBeenCalledWith('users:me:retrieved', data)
      })

      $httpBackend.flush()
    })
  })

  describe('saving connected user profile', () => {

    it('should remove fake id added on retrieval', () => {

      let user = {}
      $httpBackend.expectGET('/users/me').respond(user)
      $httpBackend.expectPUT('/users/me', (body) => body.id === undefined).respond()

      service.me().then((data) => {
        data.save()
      })

      $httpBackend.flush()
    })
  })
})
