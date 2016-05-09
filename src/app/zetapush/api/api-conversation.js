import { Api } from './api'

/**
 * @todo Should be auto generated
 * @extends Api
 */
export class ApiConversation extends Api {
  createPublicConversation({ name }) {
    this.$publish('createPublicConversation', { name })
  }
  createPrivateConversation({ name }) {
    this.$publish('createPrivateConversation', { name })
  }
  createDirectConversation({ name, interlocutors = [] }) {
    this.$publish('createDirectConversation', { name, interlocutors })
  }
  addUserInPublicConversation({ user, conversation }) {
    this.$publish('addUserInPublicConversation', { user, conversation })
  }
  addUserInConversation({ user, conversation }) {
    this.$publish('addUserInConversation', { user, conversation })
  }
  addMessageInConversation({ message, owner, conversation }) {
    this.$publish('addMessageInConversation', { message, owner, conversation })
  }
  addAttachmentInConversation({ guid, owner, conversation, metadata = {}, tags = [] }) {
    this.$publish('addAttachmentInConversation', { guid, owner, conversation, metadata, tags })
  }
  uploadAttachmentInConversation({ conversation, owner }) {
    this.$publish('uploadAttachmentInConversation', { conversation, owner })
  }
  removeUserFromConversation({ user, conversation }) {
    this.$publish('removeUserFromConversation', { user, conversation })
  }
  removeUserFromPublicConversation({ user, conversation }) {
    this.$publish('removeUserFromPublicConversation', { user, conversation })
  }
  getAttachment({ path, owner }) {
    this.$publish('getAttachment', { path, owner })
  }
  getConversationPresences({ id, owner }) {
    this.$publish('getConversationPresences', { id, owner })
  }
  getAllPublicConversations() {
    this.$publish('getAllPublicConversations', {})
  }
  getAllPrivateConversations() {
    this.$publish('getAllPrivateConversations', {})
  }
  getPublicConversationInfos({ id }) {
    this.$publish('getPublicConversationInfos', { id })
  }
  getUserConversationInfos() {
    this.$publish('getUserConversationInfos', {})
  }
  getConversationInfos({ id, owner }) {
    this.$publish('getConversationInfos', { id, owner })
  }
  deleteMessageInConversation({ id, guid, owner }) {
    this.$publish('deleteMessageInConversation', { id, guid, owner })
  }
  deleteAllMessagesInConversation({ id, owner }) {
    this.$publish('deleteAllMessagesInConversation', { id, owner })
  }
}
