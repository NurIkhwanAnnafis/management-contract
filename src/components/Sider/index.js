import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;
import {
  DesktopOutlined,
} from '@ant-design/icons';
import { useState } from "react";
import { sidebarMenus } from "../../configs/menus";
const { SubMenu } = Menu;

const defaultIcon = <DesktopOutlined />
const index = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible mode="inline" collapsed={collapsed} onCollapse={e => setCollapsed(e)} style={{ height: '100vh', paddingTop: 64 }}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {sidebarMenus.map(val => val.subrute.length === 0 ? (
          <Menu.Item key={val.path} icon={val.icon || defaultIcon}>
            {val.name}
          </Menu.Item>
        ): (
          <SubMenu key={val.path} icon={val.icon || defaultIcon} title={val.name}>
            {val.subrute.map(detail => (
              <Menu.Item key={detail.path}>{detail.name}</Menu.Item>
            ))}
          </SubMenu>  
        ))}
      </Menu>
    </Sider>
  )
}

export default index;