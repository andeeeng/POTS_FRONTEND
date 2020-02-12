import React, { useState } from "react";

import { Layout, Menu, Icon } from "antd";
import { handleClick, showContent } from "../components/helper_functions";

const { Header, Content, Footer, Sider } = Layout;
export interface ILayout {
  DBcontent?: any;
  POcontent?: any;
  SUPcontent?: any;
  HeaderContent?: any;
}
const App = (props: ILayout) => {
  const { DBcontent, POcontent, SUPcontent, HeaderContent } = props;
  const [state, setState] = useState({
    currentKey: "dashboard"
  });

  return (
    <Layout>
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          onClick={e => handleClick(e.key, state, setState)}
        >
          <Menu.Item key="dashboard">
            <span className="nav-text">My Dashboard</span>
          </Menu.Item>
          <Menu.Item key="order">
            <span className="nav-text">My Orders</span>
          </Menu.Item>
          <Menu.Item key="supplier">
            <span className="nav-text">My Suppliers</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          {HeaderContent}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {showContent(state.currentKey, DBcontent, POcontent, SUPcontent)}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
