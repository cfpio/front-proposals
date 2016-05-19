import { profile } from './profile/profile.module'
import { security } from './security/security.module'

export const components = angular.module('io.cfp.front.components', [
  profile.name,
  security.name
])
