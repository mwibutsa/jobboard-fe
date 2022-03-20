import { Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import "./page-layout.scss";

const { Header, Sider, Content } = Layout;

const { Title } = Typography;
const DashboardLayout = ({ children }) => {
  return (
    <Layout>
      <Sider collapsible>
        <div className="logoContainer">
          <Title className="appLogo" level={2}>
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
        <Header className="header"></Header>
        <Content className="siteLayoutBackground">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
