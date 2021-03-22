import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import Link from "umi/link";

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const { SubMenu, Item } = Menu;

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh", color: "white" }}>
          {/* Sider */}
          {/* logo */}
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px",
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Item key="1">
              <Link to="/helloworld">
                <Icon type="pie-chart" />
                <span>helloworld </span>
              </Link>
            </Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </span>
              }
            >
              <Item key="2">
                <Link to="/dashboard/analysis">分析页</Link>
              </Item>
              <Item key="3">
                <Link to="/dashboard/monitor">监控页</Link>
              </Item>
              <Item key="4">
                <Link to="/dashboard/workplace">工作台</Link>
              </Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>卡片页</span>
                </span>
              }
            >
              <Item key="5">
                <Link to="/pazzlecards">对话卡片</Link>
              </Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>列表页</span>
                </span>
              }
            >
              <Item key="5">
                {/* 要记得前面的/ 有表示根目录下，没有每次都会加上路由前面的菜单(父路径) */}
                <Link to="/list/mylist">列表</Link>
              </Item>
              <Item key="6">
                <Link to="/list/mylistnew">列表antd4</Link>
              </Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design© 2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
