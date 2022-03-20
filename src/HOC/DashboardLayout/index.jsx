import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./page-layout.module.scss";
const { Header, Sider, Content } = Layout;

const { Title } = Typography;
const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => setCollapsed((prev) => !prev);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={classes.logoContainer}>
          <Title className={classes.appLogo} level={2}>
            JB
          </Title>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/my-jobs">Manage jobs</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/applicants">Applicants</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: classes.trigger,
              onClick: toggleMenu,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "89vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
