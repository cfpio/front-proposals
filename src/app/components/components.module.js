import {profile} from './profile/profile.module'
import {home} from './home/home.module'
import {proposal} from './proposal/proposal.module'

export const components = angular.module('io.cfp.front.components', [
  profile.name,
  home.name,
  proposal.name
])
