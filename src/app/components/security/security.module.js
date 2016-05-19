import { AuthenticationInterceptor } from './interceptors'

export const security = angular
  .module('io.cfp.front.components.security', [])

  .service('AuthenticationInterceptor', AuthenticationInterceptor)

  .config(($httpProvider) => {
    'ngInject'

    // Add authentication HTTP interceptor
    $httpProvider.interceptors.push('AuthenticationInterceptor')
  })
