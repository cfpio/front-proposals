import { Api } from './api'

/**
 * @todo Should be auto generated
 * @extends Api
 */
export class ApiConfig extends Api {
  addConfig({ id, config } = {}) {
    this.$publish('addConfig', { id, config })
  }
  getConfig({ id } = {}) {
    this.$publish('getConfig', { id })
  }
  listConfig({ pageNumber = 0 } = {}) {
    this.$publish('listConfig', { pageNumber })
  }
  removeConfig({ id } = {}) {
    this.$publish('removeConfig', { id })
  }
  updateConfig({ id, config } = {}) {
    this.$publish('updateConfig', { id, config })
  }
}
