import { login } from './login/login.module'
import { profile } from './profile/profile.module'

export const components = angular.module('io.cfp.front.components', [
  login.name,
  profile.name
])
