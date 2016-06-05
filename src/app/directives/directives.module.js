import {showErrors} from './show-errors.directive'
import {inputTel} from './input-tel.directive'

export const directives = angular.module('io.cfp.front.directives', [])
  .directive('inputTel', inputTel)
  .directive('showErrors', showErrors)
