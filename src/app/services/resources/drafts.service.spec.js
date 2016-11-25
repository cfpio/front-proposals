describe('Drafts', () => {

  let service, Restangular

  beforeEach(angular.mock.module('io.cfp.front.services.resource'))

  beforeEach(inject((Drafts, _Restangular_) => {
    service = Drafts
    Restangular = _Restangular_
  }))

  describe('restangularize()', () => {

    beforeEach(() => {
      spyOn(Restangular, 'restangularizeElement')
    })

    it('should decorate object with Restangular methods', () => {

      const object = {}
      service.restangularize(object)

      expect(Restangular.restangularizeElement).toHaveBeenCalledWith(null, object, 'drafts')
    })
  })

  describe('submit()', () => {

    let Proposals, proposal

    beforeEach(inject((_Proposals_) => {
      Proposals = _Proposals_
      proposal = jasmine.createSpyObj('proposal', ['save']) // mock the result of Proposals.restangulize…
      spyOn(Proposals, 'restangularize').and.returnValue(proposal) // … to check it is called
    }))

    it('should convert draft to a proposal and save it', () => {

      const draft = service.restangularize({})

      draft.submit()

      expect(Proposals.restangularize).toHaveBeenCalled()
      expect(proposal.save).toHaveBeenCalled()
    })
  })
})
