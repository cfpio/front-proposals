const buildResource = (Restangular, route, sanitize, elementTransformer) => {

  const service = Restangular.service(route)
  const sanitizeModel = (model) => sanitize(model, ['description', 'references'])

  service.restangularize = (element) => Restangular.restangularizeElement(null, sanitizeModel(element), route)

  Restangular.addElementTransformer(route, false, (model) => sanitizeModel(model))

  if (elementTransformer) {
    Restangular.addElementTransformer(route, false, elementTransformer)
  }

  return service
}

const Drafts = (Restangular, Proposals, sanitize) => {
  'ngInject'

  return buildResource(Restangular, 'drafts', sanitize, (model) => {
    model.submit = () => {
      return Proposals.restangularize(model.plain()).save() // re-restangularization and save
    }
    return model
  })
}

const Proposals = (Restangular, sanitize) => {
  'ngInject'

  return buildResource(Restangular, 'proposals', sanitize)
}

export {Drafts, Proposals}
