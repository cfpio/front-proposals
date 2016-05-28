import {AuthenticationInterceptor} from './auth.interceptor'
import {AuthenticationService} from './auth.service'

export const security = angular
  .module('io.cfp.front.components.security', [])

  .provider('AuthenticationService', AuthenticationService)
  .factory('AuthenticationInterceptor', AuthenticationInterceptor)

  .config(($httpProvider) => {
    'ngInject'

    // Add authentication HTTP interceptor
    $httpProvider.interceptors.push('AuthenticationInterceptor')
  })
