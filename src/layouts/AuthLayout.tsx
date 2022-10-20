import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Outlet } from "@umijs/max";
const { Header, Content, Sider } = Layout;

/**
 * 后台权限Layout
 * @constructor
 */
const AuthLayout: React.FC = () => {
  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(10).fill(null).map((_, j) => {
          const subKey = index * 10 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Header
          style={{
            width: "100vw",
            position: "fixed",
            zIndex: 1,
          }}
        >
          <div className="logo" />
          {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />*/}
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              position: "fixed",
              left: 0,
              top: 64,
              height: "calc(100vh - 64px)",
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
                overflowY: "auto",
                overflowX: "hidden",
              }}
              items={items2}
            />
          </Sider>
          <Layout>
            <Content
              style={{
                marginLeft: 200,
                marginTop: 64,
                padding: "24px",
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default AuthLayout;
