export const handleClick = (key: any, state: any, setState: any) => {
  setState({
    ...state,
    currentKey: key
  });
};

export const showContent = (
  key: any,
  DBcontent: any,
  POcontent: any,
  SUPcontent: any
) => {
  switch (key) {
    case "dashboard":
      return DBcontent;

    case "order":
      return POcontent;

    case "supplier":
      return SUPcontent;

    default:
      break;
  }
};
