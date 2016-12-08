describe('resource', () => {

  let Restangular, sanitize

  beforeEach(angular.mock.module('io.cfp.front.services.resource', ($provide, sanitizeProvider) => {
    const sanitize = sanitizeProvider.$get()
    const spiedSanitize = jasmine.createSpy().and.callFake(sanitize)
    $provide.value('sanitize', spiedSanitize)
  }))

  beforeEach(inject((_Restangular_, _sanitize_) => {
    Restangular = _Restangular_
    sanitize = _sanitize_
  }))

  describe('Drafts', () => {

    let service

    beforeEach(inject((Drafts) => {
      service = Drafts
    }))

    describe('restangularize()', () => {

      beforeEach(() => {
        spyOn(Restangular, 'restangularizeElement')
      })

      it('should sanitize "description" and "references" and decorate object with Restangular methods', () => {

        const object = {}
        service.restangularize(object)

        expect(sanitize).toHaveBeenCalledWith(object, ['description', 'references'])
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

  describe('Proposals', () => {

    let service

    beforeEach(inject((Proposals) => {
      service = Proposals
    }))

    describe('restangularize()', () => {

      beforeEach(() => {
        spyOn(Restangular, 'restangularizeElement')
      })

      it('should sanitize "description" and "references" and decorate object with Restangular methods', () => {

        const object = {}
        service.restangularize(object)

        expect(sanitize).toHaveBeenCalledWith(object, ['description', 'references'])
        expect(Restangular.restangularizeElement).toHaveBeenCalledWith(null, object, 'proposals')
      })
    })
  })
})
