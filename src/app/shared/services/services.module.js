import {Users} from './users.service'

const dependencies = [
  'restangular'
]

export const services = angular.module('io.cfp.front.shared.services', [...dependencies])
  .provider('Users', Users)
