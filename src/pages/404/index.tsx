import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import NOT_FOUND from '@/assets/images/404.svg';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex-center h-full">
      <img src={NOT_FOUND} className="hidden md:inline-block" />
      <div className="text-center ml-30px">
        <h1 className="text-100px font-500">404</h1>
        <p className="my-20px text-30px">Page not found</p>
        <Button type="primary" onClick={() => navigate(-1)}>
          返回上一页
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
