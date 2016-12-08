import {resources} from './resources/resources.module'
import {security} from './security/security.module'
import {util} from './util/util.module'

export const services = angular.module('io.cfp.front.services', [security.name, resources.name, util.name])
