/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MessageBase
 * auto generated base class for the model MessageModel.
 */
export const MessageModelBase = ModelBase
  .named('Message')
  .props({
    __typename: types.optional(types.literal("Message"), "Message"),
    message: types.union(types.undefined, types.null, types.string),
    loggedIn: types.union(types.undefined, types.null, types.boolean),
    userLevel: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MessageModelSelector extends QueryBuilder {
  get message() { return this.__attr(`message`) }
  get loggedIn() { return this.__attr(`loggedIn`) }
  get userLevel() { return this.__attr(`userLevel`) }
}
export function selectFromMessage() {
  return new MessageModelSelector()
}

export const messageModelPrimitives = selectFromMessage().message.loggedIn.userLevel
