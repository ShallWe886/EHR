import React from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';

const TableList: React.FC<{}> = () => {
  const columns: ProColumns[] = [
    {
      title:'录用审批单号',
      dataIndex:'afNumber'
     },
     {
       title:'申请人',
       dataIndex:'afPerson'
     },
     {
      title:'申请人部门',
      dataIndex:'departmentName'
    },
    {
      title:'申请人岗位',
      dataIndex:'positionName'
    },
    {
      title:'审批状态',
      dataIndex:'afStatus'
    },
    {
      title:'发起时间',
      dataIndex:'afTime'
    },
  ]

  return (
    <PageContainer>
      <ProTable
        headerTitle="查询表格"
        rowKey="key"
        columns={columns}
      />
  </PageContainer>)
}
export default TableList