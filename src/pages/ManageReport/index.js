import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';
import { connect } from 'react-redux';
import moment from 'moment';

const prefixCls = 'manage-report';

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
};

const ManageReport = ({ lstReport }) => {
  const columns = [
    {
      title: 'Mã báo cáo',
      dataIndex: '_id'
    },
    {
      title: 'Tên báo cáo',
      dataIndex: 'name'
    },
    {
      title: 'Ngày báo cáo',
      dataIndex: 'finishDate',
      render: (text) => {
        return <span>{moment(new Date(text)).format('L')}</span>;
      }
    },
    {
      title: 'Người đánh giá',
      dataIndex: 'censor'
    },
    {
      title: 'Người thực hiện',
      dataIndex: 'worker'
    },
    {
      title: 'Bộ phận',
      dataIndex: 'department'
    },
    {
      title: 'Mức độ hoàn thành',
      dataIndex: 'completed'
    },
    {
      title: 'Xem chi tiết',
      dataIndex: 'detail',
      render: () => {
        return <Link to='report-detail'>Xem chi tiết</Link>;
      }
    }
  ];

  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-list-report`}>Danh sách báo cáo</div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={lstReport}
      />
    </div>
  );
};

const mapStateToProps = ({ global: { lstReport } }) => ({ lstReport });

export default connect(mapStateToProps, null)(ManageReport);
