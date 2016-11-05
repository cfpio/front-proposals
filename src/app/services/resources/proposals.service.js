export const Proposals = (Restangular) => {
  'ngInject'

  const route = 'proposals'
  const service = Restangular.service(route)
  service.restangularize = (element) => Restangular.restangularizeElement(null, element, route)

  return service
}
