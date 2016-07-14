import {services} from './services/services.module'

export const shared = angular.module('io.cfp.front.shared', [services.name])
