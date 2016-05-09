import { ApplicationsClient } from './application-client'

//const apiUrl = '//vm-zbo:8080/zbo/pub/business/'
const sandboxId = '1wzPkAqI'

/**
 * @type {ApplicationsClient}
 */
export const client = new ApplicationsClient({
  sandboxId
})
