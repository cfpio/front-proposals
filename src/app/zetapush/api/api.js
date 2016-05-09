import { Observable } from 'rxjs/Observable'

import { definitions } from 'zetapush-js/src'
import { client } from '../client'

const deploymentId = 'macro_api'

const toPascalCase = (word = '') => {
  return `${word.charAt(0).toUpperCase()}${word.substring(1)}`
}

const factory = ($rootScope, definition) => {
  const publisher = client.createMacroPublisher({
    deploymentId,
    definition
  })
  const filter = (element) => element !== 'constructor'
  const methods = ['error', ...Object.getOwnPropertyNames(definition.prototype).filter(filter)]
  const listener = methods.reduce((reducer, method) => {
    const source = Observable.create((observer) => {
      let active = true

      reducer[method] = ({ data = {} }) => {
        if (active) {
          observer.onNext(data)
          $rootScope.$digest()
        }
      }

      return () => {
        // Dummy implementation of dispose method
        active = false
      }
    })
    const published = source.publish()
    publisher[`on${toPascalCase(method)}`] = published
    published.connect()
    return reducer
  }, {})
  const subscription = client.subscribe({
    deploymentId,
    listener
  })
  return publisher
}

export class Api extends definitions.AbstractPublisherDefinition {
  static ngFactory() {
    return ['$rootScope', ($rootScope) => factory($rootScope, this.prototype.constructor)]
  }
}
