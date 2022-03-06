import React, { useState } from 'react';
import { DatePicker, Select, Form, Input, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

function Demo() {
  const [form] = Form.useForm();
  return (
    <>
      <PageHeaderWrapper title={false} />
      <div className="">
        <div className="container mx-auto my-20px bg-white p-5">
          <Form form={form} labelCol={{ span: 4 }}>
            <Form.Item name="userName" label="用户名">
              <Input placeholder="请输入" />
            </Form.Item>
            <Form.Item name="password" label="密码">
              <Input.Password placeholder="请输入" />
            </Form.Item>
            <Form.Item name="time" label="时间">
              <DatePicker />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Demo;
