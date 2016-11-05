export const Drafts = (Restangular, Proposals) => {
  'ngInject'

  const route = 'drafts'
  const service = Restangular.service(route)

  service.restangularize = (element) => Restangular.restangularizeElement(null, element, route)
  Restangular.addElementTransformer(route, false, (model) => {
    model.submit = () => {
      return Proposals.restangularize(model.plain()).save() // re-restangularization and save
    }
    return model
  })

  return service
}
