import { Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import "./page-layout.scss";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const DashboardLayout = ({ children }) => {
  return (
    <Layout className="dashboard-layout">
      <Sider>
        <div className="logo-container">
          <Title className="app-logo" level={2}>
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
        <Header className="site-layout-background"></Header>
        <Content className="dashboard-layout__content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
