import React from 'react';
import { DatePicker, Select, Table } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

function DemoTable() {
  return (
    <div>
      <PageHeaderWrapper title={false} />
      <div className="my-25px">
        <Table />
      </div>
    </div>
  );
}

export default DemoTable;
