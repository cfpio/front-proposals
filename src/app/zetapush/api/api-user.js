import { Api } from './api'

/**
 * @todo Should be auto generated
 * @extends Api
 */
export class ApiUser extends Api {
  getDashboard() {
    this.$publish('getDashboard', {})
  }
  createUser({ login, password, mail  }) {
    this.$publish('createUser', { login, password, mail  })
  }
  getUserPublicInfos() {
    this.$publish('getUserPublicInfos', {})
  }
  getUserPrivateInfos() {
    this.$publish('getUserPrivateInfos', {})
  }
  getUserPrivateInfosAsUser({ user }) {
    this.$publish('getUserPrivateInfosAsUser', { user })
  }
  searchUser({ criteria }) {
    this.$publish('searchUser', { criteria })
  }
  updateUser({ profile }) {
    this.$publish('updateUser', { profile })
  }
  changePassword({ password, token }) {
    this.$publish('changePassword', { password, token })
  }
  resetPasswordByMail({ mail }) {
    this.$publish('resetPasswordByMail', { mail })
  }
  resetPasswordByUserId({ userId }) {
    this.$publish('resetPasswordByUserId', { userId })
  }
}
