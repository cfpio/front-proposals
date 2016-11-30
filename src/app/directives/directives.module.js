import {multiInput} from './multi-input/multi-input'
import {markdownEditor} from './mardown-editor'

const dependencies = [
  'ui.bootstrap.tabs',
  'ui.bootstrap.tpls'
]

export const directives = angular.module('io.cfp.front.directives', dependencies)
  .directive('multiInput', multiInput)
  .directive('markdownEditor', markdownEditor)
