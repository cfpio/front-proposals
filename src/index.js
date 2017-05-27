import app from './app/index.module'

import './app/index.scss'

const configLoaded = fetch('/infra', {method: 'HEAD'})
  .then(response => {
    app.constant('Infra', {
      apiServer: response.headers.get('X-API-Server'),
      authServer: response.headers.get('X-Authentication-Server')
    })
  })

/* eslint angular/document-service: 0 */
document.addEventListener('DOMContentLoaded', () => {
  configLoaded.then(() => {
    angular.bootstrap(document.documentElement, [app.name], {
      strictDi: true
    })
  })
})
