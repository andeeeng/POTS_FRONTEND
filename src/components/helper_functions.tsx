export const handleClick = (key: any, state: any, setState: any) => {
  const path = () => {
    switch (key) {
      case 'dashboard':
        return '/DashBoard'

      case 'order':
        return '/Orders'

      case 'supplier':
        return '/Suppliers'

      default:
        break
    }
  }
  setState({
    ...state,
    currentKey: key,
    path: path(),
  })
}

export const login = async (userinfo: any, setQuery: any, rootStore: any) => {
  setQuery(rootStore.requestLogin(userinfo))
}

export const updateStatus = (
  scheduleline: any,
  rootStore: any,
  setQuery: any,
) => {
  setQuery(rootStore.updateStatus(scheduleline))
}

export const showContent = (
  key: any,
  DBcontent: any,
  POcontent: any,
  SUPcontent: any,
) => {
  switch (key) {
    case 'dashboard':
      return DBcontent

    case 'order':
      return POcontent

    case 'supplier':
      return SUPcontent

    default:
      break
  }
}
