import {config} from './index.config'
import {router} from './index.router'
import {i18n} from './index.language'

import {directives} from './directives/directives.module'
import {components} from './components/components.module'
import {services} from './services/services.module'

const dependencies = [
  'ngSanitize',
  'restangular',
  'ui.router',
  'pascalprecht.translate',
  'hc.marked',
  'tmh.dynamicLocale'
]

const app = angular.module('io.cfp.front', [...dependencies, components.name, directives.name, services.name])
  .constant('moment', moment)
  .config(config)
  .config(router)
  .config(i18n)

  .run(($log, $rootScope, $translate, tmhDynamicLocale) => {
    'ngInject'

    const syncL10nWithI18n = () => {
      tmhDynamicLocale.set($translate.use())
    }

    syncL10nWithI18n()

    $rootScope.$on('$translateChangeSuccess', syncL10nWithI18n)

    $rootScope.$on('users:me:retrieved', (event, user) => {
      event.stopPropagation()
      $translate.use(user.language)
      $log.debug('Language changed to: ' + user.language)
    })

    $log.debug('App Initialized')
  })

const configLoaded = fetch('/infra', {method: 'HEAD'})
  .then(response => {
    app.constant('Infra', {
      apiServer: response.headers.get('X-API-Server'),
      authServer: response.headers.get('X-Authentication-Server')
    })
  })

document.addEventListener('DOMContentLoaded', () => {
  configLoaded.then(() => {
    angular.bootstrap(document.documentElement, [app.name], {
      strictDi: true
    })
  })
})
