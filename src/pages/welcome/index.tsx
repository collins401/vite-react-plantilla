import React from 'react';
import { SvgIcon } from '@/components';
import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import DemoModal from './settingModal';
import env from '@/utils/env';

const Welcome = () => {
  function openModal() {
    DemoModal.show({
      onOk() {}
    });
  }
  return (
    <div>
      <div className="text-30px my-30px">Welcome to Dashboard</div>
      {env.DEV && (
        <Button type="primary" onClick={openModal} icon={<SettingOutlined />}>
          打开全局配置
        </Button>
      )}
      <SvgIcon type="user" fill="fill-primary" className="animate-spin" size={30} />
      <DemoModal />
    </div>
  );
};

export default Welcome;
