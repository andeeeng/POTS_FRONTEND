import { createContext, useState } from 'react'

export interface IMeContext {
  username: any
  userlevel: any
  login: any
  logout: any
  loggedIn: boolean
}

const defaultContext: IMeContext = {
  username: '',
  userlevel: '',
  login: (loggedInFlag: any) => {},
  logout: () => {},
  loggedIn: false,
}

const MeContext = createContext(defaultContext)

export default MeContext
