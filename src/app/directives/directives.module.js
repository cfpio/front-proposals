import {showErrors} from './show-errors.directive'

export const directives = angular.module('io.cfp.front.directives', [])
  .directive('showErrors', showErrors)
