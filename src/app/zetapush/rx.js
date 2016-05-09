import { Observable } from 'rxjs/Observable'

const noop = () => {}

const ERROR  = 'error'

/**
 * @param {string} deployment
 * @param {string} publish
 * @param {string} subscribe
 * @param {string} error
 * @param {function} callback
 * @return {Observable}
 */
const api = ({ deployment, publish, subscribe, error = ERROR, callback = noop }) => {
  console.debug('rx::api', deployment, publish, subscribe, error)
  return Observable.create((observer) => {
    const channels = {
      publish: zp.generateChannel(deployment, publish),
      subscribe: zp.generateChannel(deployment, subscribe),
      error: zp.generateChannel(deployment, error)
    }
    const handlers = []
    handlers.push(zp.on(channels.subscribe, ({ data }) => {
      console.debug('rx::api::on', channels.subscribe, data)
      observer.onNext(data)
    }))
    handlers.push(zp.on(channels.error, ({ data }) => {
      console.debug('rx::api::on', channels.error, data)
      if (channels.publish === data.channelName || channels.subscribe === data.channelName) {
        observer.onError(data)
      }
    }))
    callback(channels.publish)
    return () => {
      console.debug('rx::api::dispose', deployment, publish, subscribe, error)
      handlers.forEach((handler) => {
        zp.off(handler)
      })
    }
  })
}

/**
 * @param {string} deployment
 * @param {string} verb
 * @return {Observable}
 */
const on = ({ deployment, verb }) => {
  console.debug('rx::on', deployment, verb)
  return Observable.create((observer) => {
    const channel = zp.generateChannel(deployment, verb)
    const handler = zp.on(channel, ({ data }) => {
      console.debug('rx::on::on', channel, data)
      observer.onNext(data)
    })
    return () => {
      console.debug('rx::on::dispose', deployment, verb)
      zp.off(handler)
    }
  })
}
/**
 * @param {string} deployment
 * @param {string} verb
 * @param {object} parameters
 * @return {Observable}
 */
export const send = ({ deployment, publish, subscribe, error = 'error', parameters = {} }) => {
  console.debug('rx::send', deployment, publish, subscribe, error, parameters)
  const callback = (channel) => {
    console.debug('zx::send::callback', channel, parameters)
    zp.send(channel, parameters)
  }
  return api({ deployment, publish, subscribe, error, callback })
}

/**
 * @class Service
 * @extends Service
 */
export class Service {
  /**
   * @constructor
   */
  constructor({ id }) {
    // Bind properties
    this.id = id
  }
  /**
  * @param {string} verb
  * @return {Observable}
   */
  on({ verb }) {
    return on({
      deployment: this.id,
      verb
    })
  }
  /**
  * @param {string} publish
  * @param {string} subscribe
  * @param {object} parameters
  * @return {Observable}
   */
  send({ publish, subscribe, parameters = {} }) {
    return send({
      deployment: this.id,
      publish,
      subscribe,
      parameters
    })
  }
}
