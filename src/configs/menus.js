import { BarChartOutlined, FileDoneOutlined, GiftOutlined, MoneyCollectOutlined, UserOutlined, UserSwitchOutlined } from "@ant-design/icons";

export const sidebarMenus = [
  {
    name: 'Admin',
    path: 'admin',
    icon: <UserOutlined />,
    subrute: []
  },
  {
    name: 'User',
    path: 'user',
    icon: <UserOutlined />,
    subrute: []
  },
  {
    name: 'Invoice',
    path: 'invoice',
    icon: <FileDoneOutlined />,
    subrute: [
      {
        name: 'Invoice Approval',
        path: 'invoice/approval',
        icon: null,
      }
    ]
  },
  {
    name: 'Salary',
    path: 'Salary',
    icon: <MoneyCollectOutlined />,
    subrute: []
  },
  {
    name: 'Cash Flow Statement',
    path: 'cash-flow-statement',
    icon: <BarChartOutlined />,
    subrute: []
  },
  {
    name: 'Products',
    path: 'products',
    icon: <GiftOutlined />,
    subrute: []
  },
  {
    name: 'Roles',
    path: 'roles',
    icon: <UserSwitchOutlined />,
    subrute: []
  }
]