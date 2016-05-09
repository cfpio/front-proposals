import { client } from './client'
import { ApiUser } from './api/api-user'
import { ApiConfig } from './api/api-config'
import { ApiGroup } from './api/api-group'
import { ApiConversation } from './api/api-conversation'

/**
 * Initialise les composants zetapush
 * Gère la persitence de session utilisateur
 * @param Function callback
 */
export const initialize = new Promise((onConnectionEstablished, onFailedHandshake) => {
  client.addConnectionStatusListener({ onConnectionEstablished, onFailedHandshake })
  client.connect()
})

/**
 * @type {angular.module}
 */
export const zetapush = angular
  .module('zetapush', [])
  .constant('ZetaPushClient', client)
  .factory('ApiUser', ApiUser.ngFactory())
  .factory('ApiConfig', ApiConfig.ngFactory())
  .factory('ApiGroup', ApiGroup.ngFactory())
  .factory('ApiConversation', ApiConversation.ngFactory())
