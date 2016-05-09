import { Api } from './api'

/**
 * @todo Should be auto generated
 * @extends Api
 */
export class ApiGroup extends Api {
  getAllUserGroups() {
    this.$publish('getAllUserGroups', {})
  }
  getAllGlobalGroups() {
    this.$publish('getAllGlobalGroups', {})
  }
  getGlobalGroupInfos({ id }) {
    this.$publish('getGlobalGroupInfos', { id })
  }
  getUserGroupInfos({ id }) {
    this.$publish('getUserGroupInfos', { id })
  }
  addUserInGlobalGroup({ id, user }) {
    this.$publish('addUserInGlobalGroup', { id, user })
  }
  addUserInGroup({ id, user }) {
    this.$publish('addUserInGroup', { id, user })
  }
  createGlobalGroup({ name }) {
    this.$publish('createGlobalGroup', { name })
  }
  createUserGroup({ name }) {
    this.$publish('createUserGroup', { name })
  }
  removeUserFromGlobalGroup({ id, user }) {
    this.$publish('removeUserFromGlobalGroup', { id, user })
  }
  deleteGlobalGroup({ id }) {
    this.$publish('deleteGlobalGroup', { id })
  }
  deleteUserGroup({ id }) {
    this.$publish('deleteUserGroup', { id })
  }
}
