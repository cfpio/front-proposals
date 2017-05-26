import angular from 'angular'

import {sanitizeObject, sanitizeText} from './sanitize.service'

export const util = angular.module('io.cfp.front.services.util', ['ngSanitize'])
  .factory('sanitize', sanitizeObject)
  .filter('sanitize', sanitizeText)
