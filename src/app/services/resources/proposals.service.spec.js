describe('Proposals', () => {

  let service, Restangular

  beforeEach(angular.mock.module('io.cfp.front.services.resource'))

  beforeEach(inject((Proposals, _Restangular_) => {
    service = Proposals
    Restangular = _Restangular_
  }))

  describe('restangularize()', () => {

    beforeEach(() => {
      spyOn(Restangular, 'restangularizeElement')
    })

    it('should decorate object with Restangular methods', () => {

      const object = {}
      service.restangularize(object)

      expect(Restangular.restangularizeElement).toHaveBeenCalledWith(null, object, 'proposals')
    })
  })
})
