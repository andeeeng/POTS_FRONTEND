import { createContext, useState, useMemo } from 'react'

export interface IUserContext {
  username: any
  userlevel: any
  userid: any
  setUser: any
}

const defaultContext: IUserContext = {
  username: '',
  userlevel: '',
  userid: '',
  setUser: async (user: any, level: any, id: any) => {},
}

export const UserContext = createContext(defaultContext)
