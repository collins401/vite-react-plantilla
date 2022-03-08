import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { updateSetting } from '@/store/modules/app';
import { RootState } from '@/store';
import { InfoCircleOutlined } from '@ant-design/icons';

interface Payload {
  onOk?: () => void;
  onCancel?: () => void;
  [others: string]: any;
}

type SettingModalType = React.NamedExoticComponent & {
  show: (payload: Payload) => void;
};
const layoutMode = [
  { value: 'side', label: 'side' },
  { value: 'top', label: 'top' },
  { value: 'mix', label: 'mix' }
];
const themes = [
  { value: 'light', label: '浅色' },
  { value: 'dark', label: '深色' }
];

const SettingModal: SettingModalType = React.memo(() => {
  const [visible, setVisible] = useState(false);
  const payloadRef = useRef<Payload>({});
  const [form] = Form.useForm();
  const dispath = useDispatch();
  const { settings } = useSelector((state: RootState) => state.app);
  useEffect(() => {
    const lastShow = SettingModal.show;
    SettingModal.show = (payload: Payload) => {
      setVisible(true);
      payloadRef.current = payload;
    };
    return () => {
      SettingModal.show = lastShow;
    };
  }, []);

  const wrapWithClose = (method?: (v: any) => void) => async () => {
    method?.('ok');
    setVisible(false);
  };

  function changeTheme(type: string, val: string) {
    const cache: any = { ...settings };
    cache[type] = val;
    dispath(updateSetting(cache));
  }

  return (
    <Modal
      title={payloadRef.current.title || '全局配置'}
      width={550}
      visible={visible}
      destroyOnClose
      onOk={wrapWithClose(payloadRef.current.onOk)}
      onCancel={() => setVisible(false)}
      footer={
        <Button type="primary" onClick={() => setVisible(false)}>
          关闭
        </Button>
      }
    >
      <Form form={form} labelCol={{ span: 7 }} initialValues={settings}>
        <Form.Item name="layout" label="菜单模式(layout)">
          <Radio.Group options={layoutMode} onChange={e => changeTheme('layout', e.target.value)} />
        </Form.Item>
        <Form.Item name="headerTheme" label="修改 Header 主题">
          <Radio.Group
            options={themes}
            onChange={e => changeTheme('headerTheme', e.target.value)}
          />
        </Form.Item>
        <Form.Item name="navTheme" label="修改 Navbar 主题">
          <Radio.Group options={themes} onChange={e => changeTheme('navTheme', e.target.value)} />
        </Form.Item>
      </Form>
      <div className="text-primary">
        主题配置仅在开发环境下现实 <br />
        复制以下配置到<code>./src/constants/setting</code>，替换defaultThemeSetting即可
      </div>
      {JSON.stringify(settings)}
    </Modal>
  );
}) as any;
SettingModal.show = (payload: Payload) => console.log('SettingModal is not mounted.');
export default SettingModal;
