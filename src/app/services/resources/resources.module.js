import {Users} from './users.service'
import {Drafts} from './drafts.service'
import {Proposals} from './proposals.service'
import {Tracks} from './tracks.service'
import {Formats} from './formats.service'

const dependencies = [
  'restangular'
]

export const resources = angular.module('io.cfp.front.services.resource', [...dependencies])
  .provider('Users', Users)
  .factory('Drafts', Drafts)
  .factory('Proposals', Proposals)
  .factory('Tracks', Tracks)
  .factory('Formats', Formats)
