import angular from 'angular'
import moment from 'moment'
import ngSanitize from 'angular-sanitize'
import restangular from 'restangular'
import uiRouter from 'angular-ui-router'
import ngTranslate from 'angular-translate'
import hcMarked from 'angular-marked'
import tmhDynamicLocale from 'angular-dynamic-locale'

import {config} from './index.config'
import {router} from './index.router'
import {i18n} from './index.language'

import {directives} from './directives/directives.module'
import {components} from './components/components.module'
import {services} from './services/services.module'

const dependencies = [
  ngSanitize,
  restangular,
  uiRouter,
  ngTranslate,
  hcMarked,
  tmhDynamicLocale
]

export default angular.module('io.cfp.front', [...dependencies, components.name, directives.name, services.name])
  .constant('moment', moment)
  .config(config)
  .config(router)
  .config(i18n)

  .run(($log, $rootScope, $translate, tmhDynamicLocale) => {
    'ngInject'

    // TODO fix this
    /* eslint angular/on-watch: 0 */
    const syncL10nWithI18n = () => {
      tmhDynamicLocale.set($translate.use())
    }

    $translate.onReady().then(syncL10nWithI18n)

    $rootScope.$on('$translateChangeSuccess', syncL10nWithI18n)

    $rootScope.$on('users:me:retrieved', (event, user) => {
      event.stopPropagation()
      $translate.use(user.language)
      $log.debug('Language changed to: ' + user.language)
    })

    $log.debug('App Initialized')
  })

