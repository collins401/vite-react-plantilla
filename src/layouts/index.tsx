import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProLayout, { DefaultFooter, MenuDataItem } from '@ant-design/pro-layout';
import Nprogress from '@/components/Loading/Nprogress';
import { ErrorBoundary } from '@/components';
import { ConfigProvider } from 'antd';
import RightBar from './components/RightBar';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import { RootState } from '@/store';
import LOGO from '/favicon.svg';
import _defualtMenus, { MenuType } from '@/routes/defaultMenus';

const BasicLayout: React.FC = () => {
  const { settings } = useSelector((state: RootState) => state.app);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  function LinkToPage(item: MenuDataItem) {
    const path = item.redirect || item.path;
    if (path !== pathname) {
      navigate(path);
    }
  }
  return (
    <ProLayout
      {...settings}
      style={{
        minHeight: '100vh'
      }}
      menu={{
        request: async () => _defualtMenus
      }}
      fixSiderbar
      disableContentMargin={false}
      breakpoint={false}
      disableMobile={false}
      location={{
        pathname
      }}
      headerHeight={50}
      logo={() => (
        <div className="logo_top">
          <img src={LOGO} alt="logo" height="29" onClick={() => navigate('/')} />
        </div>
      )}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: '首页'
        },
        ...routers
      ]}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return <div>{defaultDom}</div>;
        }
        return (
          <div className="ant-menu-item--block-line" onClick={() => LinkToPage(menuItemProps)}>
            {defaultDom}
          </div>
        );
      }}
      rightContentRender={() => <RightBar />}
      footerRender={() =>
        pathname === '/' && <DefaultFooter links={false} copyright="还有疑问？请联系：xxx" />
      }
    >
      <Suspense fallback={<Nprogress />}>
        <ConfigProvider locale={zhCN}>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </ConfigProvider>
      </Suspense>
    </ProLayout>
  );
};

export default BasicLayout;
