import React from 'react';
import {
  HomeOutlined,
  ClusterOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
  SettingOutlined,
  LinkOutlined
} from '@ant-design/icons';

export interface MenuType {
  name: string;
  path: string;
  icon?: React.ReactNode;
  access?: string;
  hideInMenu?: boolean;
  children?: MenuType[];
}

const defaultMenu: MenuType[] = [
  {
    path: '/',
    name: '首页',
    icon: <HomeOutlined />
  },
  {
    name: 'demo',
    path: '/demo',
    icon: <ClusterOutlined />,
    children: [
      {
        name: 'form',
        path: 'form',
        icon: <SafetyCertificateOutlined />
      },
      {
        name: 'table',
        path: 'table',
        icon: <SettingOutlined />
      }
    ]
  },
  {
    name: 'github',
    path: 'https://github.com',
    icon: <LinkOutlined />
  }
];
export default defaultMenu;
