import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import BG_IMG from '@/assets/images/login_bg.svg';
function Login() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function login() {
    form.validateFields().then(value => {
      setLoading(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    });
  }
  return (
    <div className="flex h-full">
      <div className="md:w-[61.8%] md:flex-center bg-primary">
        <img className="hidden md:block" src={BG_IMG} alt="" />
      </div>
      <div className="flex-1 flex-center">
        <div className="flex-1">
          <div className="bg-white p-10 md:(w-400px -ml-200px rounded-lg shadow-lg border-current)">
            <h2 className="text-center text-30px mb-30px">用户登录</h2>
            <Form form={form} labelCol={{ span: 5 }} autoComplete="off" onFinish={login}>
              <Form.Item
                name="userName"
                label="用户名"
                rules={[{ required: true, message: '用户名不能为空' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="输入用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                label="密码"
                rules={[{ required: true, message: '密码不能为空' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="输入密码" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 5 }}>
                <div className="space-x-10px">
                  <Button type="primary" ghost onClick={() => form.resetFields()}>
                    清除
                  </Button>
                  <Button htmlType="submit" loading={loading} type="primary">
                    登录
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
