import {Users} from './users.service'
import {Drafts, Proposals} from './proposals.service'
import {Tracks} from './tracks.service'
import {Formats} from './formats.service'
import {Event} from './event.service'

const dependencies = [
  'restangular',
  'io.cfp.front.services.util'
]

export const resources = angular.module('io.cfp.front.services.resource', [...dependencies])
  .provider('Users', Users)
  .factory('Drafts', Drafts)
  .factory('Proposals', Proposals)
  .factory('Tracks', Tracks)
  .factory('Formats', Formats)
  .provider('Event', Event)
