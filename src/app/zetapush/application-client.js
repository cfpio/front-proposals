import { AuthentFactory, Client } from 'zetapush-js/src'
import { SessionPersistenceStrategy } from './utils'

/**
 * @type {SessionPersistenceStrategy}
 */
const persistence = new SessionPersistenceStrategy()

/**
 * @return {boolean}
 */
const isWeak = (session) => {
  return 'string' === typeof session.publicToken
}
/**
* @return {boolean}
*/
const isStrong = (session) => {
  return !isWeak(session) && 'string' === typeof session.token
}

/**
 * @extends Client
 */
export class ApplicationsClient extends Client {
  /**
   *
   */
  constructor({ apiUrl, sandboxId }) {
    /**
     * @return {AbstractHandshakeManager}
     */
    const handshakeStrategy = () => {
      const session = persistence.get()
      const { token } = session
      if (this.hasCredentials()) {
        const { login, password } = this.getCredentials()
        return AuthentFactory.createSimpleHandshake({
          deploymentId: 'simple_admin',
          login,
          password
        })
        this.setCredentials({})
      }
      else {
        if (this.isStronglyAuthenticated(session)) {
          return AuthentFactory.createSimpleHandshake({
            deploymentId: 'simple_admin',
            login: token,
            password: null
          })
        }
        else {
          return AuthentFactory.createWeakHandshake({
            deploymentId: 'weak_main',
            token
          })
        }
      }
    }
    super({
      apiUrl, sandboxId, handshakeStrategy
    })
    this.credentials = {}
    this.addConnectionStatusListener({
      onConnectionClosed() {
        persistence.set({})
      },
      onSuccessfulHandshake(session) {
        console.debug('onSuccessfulHandshake', session)
        if (session.token) {
          persistence.set(session)
        }
      },
      onFailedHandshake(failure) {
        console.error('onFailedHandshake', failure)
      }
    })
  }
  /**
  * @return {boolean}
  */
  isStronglyAuthenticated(session = persistence.get()) {
    return !this.isWeaklyAuthenticated(session) && 'string' === typeof session.token
  }
  /**
  * @return {boolean}
  */
  isWeaklyAuthenticated(session = persistence.get()) {
    return 'string' === typeof session.publicToken
  }
  /**
   * @param {{login: string, password: string}} parameters
   */
  setCredentials({ login, password }) {
    this.credentials = { login, password }
  }
  /**
   * @return {Object}
   */
  getCredentials() {
    return this.credentials
  }
  /**
  * @return {boolean}
  */
  hasCredentials() {
    const credentials = this.getCredentials()
    return credentials.login && credentials.password
  }
  handshake() {
    console.debug('ApplicationsClient::handshake')
    super.handshake()
  }
  connect() {
    console.debug('ApplicationsClient::connect')
    super.connect()
  }
  disconnect() {
    console.debug('ApplicationsClient::disconnect')
    super.disconnect()
  }
}
