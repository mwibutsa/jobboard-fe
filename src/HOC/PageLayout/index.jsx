import { Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import "./page-layout.scss";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const PageLayout = ({ children }) => {
  return (
    <Layout className="page-layout">
      <Header className="page-layout__header">
        <Title level={1} className="logo">
          <Link to="/jobs">JobBoard</Link>
        </Title>
        <Menu theme="dark">
          <Menu.Item>
            <Link to="/applicants">Dashboard</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="page-layout__content">
        <div className="site-layout-background">{children}</div>
      </Content>
      <Footer className="page-layout__footer">JobBoard</Footer>
    </Layout>
  );
};

export default PageLayout;
