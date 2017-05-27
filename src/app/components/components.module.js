import angular from 'angular'

import {profile} from './profile/profile.module'
import {home} from './home/home.module'
import {proposal} from './proposal/proposal.module'

// TODO fix this
/* eslint angular/module-setter: 0 */
export const components = angular.module('io.cfp.front.components', [
  profile.name,
  home.name,
  proposal.name
])
