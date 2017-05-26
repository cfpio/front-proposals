import angular from 'angular'

import {AuthenticationInterceptor} from './auth.interceptor'
import {AuthenticationService} from './auth.service'

export const security = angular
  .module('io.cfp.front.services.security', [])

  .provider('AuthenticationService', AuthenticationService)
  .provider('AuthenticationInterceptor', AuthenticationInterceptor)

  .config(($httpProvider) => {
    'ngInject'

    // Add authentication HTTP interceptor
    $httpProvider.interceptors.push('AuthenticationInterceptor')
  })
