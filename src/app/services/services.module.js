import {resources} from './resources/resources.module'
import {security} from './security/security.module'

export const services = angular.module('io.cfp.front.services', [security.name, resources.name])
