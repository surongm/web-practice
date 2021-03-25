import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import Link from "umi/link";

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const { SubMenu, Item } = Menu;

const menus = [
  {
    key: '0',
    name: 'helloworld',
    type: 'pie-chart',
    link: '/helloworld'
  },
  {
    key: '1',
    name: 'Dashboard',
    type: 'dashboard',
    link: '',
    child: [
      {
        key: '1-0',
        name: '分析页',
        type: 'dashboard',
        link: '/dashboard/analysis'
      },
      {
        key: '1-1',
        name: '监控页',
        type: 'dashboard',
        link: '/dashboard/monitor'
      },
      {
        key: '1-2',
        name: '工作台',
        type: 'dashboard',
        link: '/dashboard/workplace'
      },
    ]
  },
  {
    key: '2',
    name: '卡片页',
    type: 'dashboard',
    link: '',
    child: [
      {
        key: '2-0',
        name: '对话卡片',
        type: 'dashboard',
        link: '/pazzlecards'
      }
    ]
  },
  {
    key: '3',
    name: '列表页',
    type: 'dashboard',
    link: '',
    child: [
      {
        key: '3-0',
        name: '列表',
        type: 'dashboard',
        link: '/list/mylist'
      },
      {
        key: '3-1',
        name: '列表antd4',
        type: 'dashboard',
        link: '/list/mylistnew'
      }
    ]
  },
  {
    key: '4',
    name: '图表页',
    type: 'dashboard',
    link: '',
    child: [
      {
        key: '4-0',
        name: '简单图表',
        type: 'dashboard',
        link: '/charts/samplechart'
      },
      {
        key: '4-1',
        name: 'Antd Charts',
        type: 'dashboard',
        link: '/charts/antdcharts'
      }
    ]
  },
  {
    key: '5',
    name: 'css相关',
    type: 'dashboard',
    link: '',
    child: [
      {
        key: '5-0',
        name: 'hello',
        type: 'dashboard',
        link: '/css/hello'
      },
      {
        key: '5-1',
        name: 'less',
        type: 'dashboard',
        link: '/css/less'
      },
      {
        key: '5-2',
        name: 'cover',
        type: 'dashboard',
        link: '/css/cover'
      },
    ]
  },
]

export default class BasicLayout extends Component {
  // SubMenu 里面包括 menuItem
  renderSubMenu = (menu) => {
    return (
      <SubMenu
        key={menu.key}
        title={
          <span>
            <Icon type={menu.type} />
            <span>{menu.name}</span>
          </span>
        }
      >
        {
          menu.child.length ?
            menu.child.map((submenu) => this.renderMenuItem(submenu))
            : null
        }
      </SubMenu>
    )
  }

  // menuItem 组件
  renderMenuItem = (menu) => {
    return (
      <Item key={menu.key}>
        <Link to={menu.link}>
          <Icon type={menu.type} />
          <span>{menu.name}</span>
        </Link>
      </Item>
    )
  }

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

          {/* map */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {
              menus.map((menu) => {
                return (!menu.child) ? this.renderMenuItem(menu)
                  : this.renderSubMenu(menu)
              })
            }
          </Menu>

          {/* 罗列的menu */}
          {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {
              menus.map((menu) => {
                menu.child ? this.renderSubMenu(menu)
                  : this.renderMenuItem(menu)
              })
            }
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
                // 要记得前面的/ 有表示根目录下，没有每次都会加上路由前面的菜单(父路径) 
                <Link to="/list/mylist">列表</Link>
              </Item>
              <Item key="6">
                <Link to="/list/mylistnew">列表antd4</Link>
              </Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>图表页</span>
                </span>
              }
            >
              <Item key="7">
                <Link to="/charts/samplechart">简单图表</Link>
              </Item>
              <Item key="8">
                <Link to="/charts/antdcharts">Antd Charts</Link>
              </Item>
            </SubMenu>
          </Menu> */}
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
