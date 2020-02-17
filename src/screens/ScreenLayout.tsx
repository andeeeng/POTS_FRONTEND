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
        style={{ backgroundColor: "white" }}
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
          <Menu.Item key="dashboard" style={{ marginBottom: 30 }}>
            <Icon type="dashboard" style={{ fontSize: 30 }} />

            <span className="nav-text">My Dashboard</span>
          </Menu.Item>
          <Menu.Item key="order" style={{ marginBottom: 30 }}>
            <Icon type="car" style={{ fontSize: 30 }} />
            <span className="nav-text">My Orders</span>
          </Menu.Item>
          <Menu.Item key="supplier" style={{ marginBottom: 30 }}>
            <Icon type="code-sandbox" style={{ fontSize: 30 }} />
            <span className="nav-text">My Suppliers</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 50, marginBottom: 20 }}>
          {HeaderContent}
        </Header> */}
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            {HeaderContent}
            {showContent(state.currentKey, DBcontent, POcontent, SUPcontent)}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Purchase Order Tracking System ©2020 Created by Fast Track
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
