import React from "react";
import { Table, Button, Icon } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

const prefixCls = "manage-report";

const columns = [
  {
    title: "Mã báo cáo",
    dataIndex: "codeReport"
  },
  {
    title: "Tên báo cáo",
    dataIndex: "name"
  },
  {
    title: "Ngày báo cáo",
    dataIndex: "finishDate"
  },
  {
    title: "Người đánh giá",
    dataIndex: "censor"
  },
  {
    title: "Người thực hiện",
    dataIndex: "worker"
  },
  {
    title: "Bộ phận",
    dataIndex: "department"
  },
  {
    title: "Mức độ hoàn thành",
    dataIndex: "completed"
  },
  {
    title: "Xem chi tiết",
    dataIndex: "detail",
    render: () => {
      return <Link to="report-detail">Xem chi tiết</Link>;
    }
  }
];

const data = [
  {
    codeReport: 1,
    name: "Báo cáo kiểm tra chất lượng thuốc nén",
    finishDate: "20-11-2019",
    censor: "Trần Trung Huỳnh",
    // codeCensor: "KT_01",
    worker: "Phạm Đại Tài",
    // codeWorker: "KT_02",
    department: "Kiểm tra chất lượng",
    completed: "85%"
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name
  })
};

const ManageReport = ({}) => {
  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-list-report`}>Danh sách báo cáo</div>
      <Button type="primary" className={`${prefixCls}-btn`}>
        <Icon type="plus-circle" />
        <Link to="/create-report">Tạo báo cáo</Link>
      </Button>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default ManageReport;
