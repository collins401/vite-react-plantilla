import React from 'react';
import { Spin } from 'antd';

function Loading() {
  return (
    <div className="text-center py-20px">
      <Spin />
    </div>
  );
}

export default Loading;
