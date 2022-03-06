import React from 'react';
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { TOKEN_KEY } from '@/constants/emun';

interface IProps {
  name?: string;
}

const RightBar: React.FC<IProps> = props => {
  const { name, children } = props;
  const navigate = useNavigate();
  function confirm() {
    Cookies.remove(TOKEN_KEY);
    return new Promise(resolve => {
      setTimeout(() => {
        navigate('/login');
        resolve('ok');
      }, 1000);
    });
  }
  return (
    <div className="px-10px">
      <Popconfirm
        placement="bottomRight"
        title="确定退出当前用户？"
        onConfirm={confirm}
        okText="确定"
        cancelText="取消"
      >
        <Avatar className="bg-primary" size="small" icon={<UserOutlined />} />
        <span className="inline-block mx-5px">Santiago Silva</span>
      </Popconfirm>
    </div>
  );
};

export default RightBar;
