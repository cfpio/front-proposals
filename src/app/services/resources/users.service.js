export const Users = (RestangularProvider) => {
  'ngInject'

  const usersPath = 'users'
  const meId = 'me'

  RestangularProvider.addRequestInterceptor((element, operation, what, url) => {
    if (what === usersPath && operation === 'put' && _.endsWith(url, meId)) {
      delete element.id // let's remove the id which was added only as a workaround, and is not supported by the API
    }
    return element
  })

  return {
    '$get': ($rootScope, Restangular, sanitize) => {
      'ngInject'

      const service = Restangular.service(usersPath)

      Restangular.addElementTransformer(usersPath, false, (model) => sanitize(model, ['bio']))

      service.me = () => service.one(meId).get().then((user) => {
        $rootScope.$emit('users:me:retrieved', user)
        user.id = meId // workaround to API not providing the id, which is used by restangular to manage resource URL
        return user
      })

      return service
    }
  }
}
