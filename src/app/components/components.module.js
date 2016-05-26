import { profile } from './profile/profile.module'
import { security } from './security/security.module'
import { home } from './home/home.module'

export const components = angular.module('io.cfp.front.components', [
  profile.name,
  security.name,
  home.name
])
