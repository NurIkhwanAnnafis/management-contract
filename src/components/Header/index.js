import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu } from "antd";
import './index.scss'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const index = (props) => {

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <p>Welcome Ikhwan</p>
      </Menu.Item>
      <Menu.Item key="1">
        <p>Setting Profile</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <p>Logout</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="text-end">
        <Avatar size={48} icon={<UserOutlined  />} className="me-3"/>
        <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" overlayClassName="custom-dropdown-profile">
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </Header>
  )
}

export default index;