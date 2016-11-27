import {showErrors} from './show-errors.directive'
import {multiInput} from './multi-input/multi-input'

export const directives = angular.module('io.cfp.front.directives', [])
  .directive('showErrors', showErrors)
  .directive('multiInput', multiInput)
