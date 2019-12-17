import React from 'react';
import './style.css';
import { Icon, Descriptions, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TaskDetailEmployee = () => {
  const taskDetail = useSelector((state) => state.taskDetail);
  console.log('TCL: TaskDetail -> taskDetail', taskDetail);

  return (
    <div className='detail-task'>
      <Descriptions title='Chi tiết công việc nhân viên' bordered>
        <Descriptions.Item label='Mã công việc' span='3'>
          {taskDetail.index}
        </Descriptions.Item>
        <Descriptions.Item label='Tên công việc' span='3'>
          {taskDetail.name}
        </Descriptions.Item>
        <Descriptions.Item label='Mã công việc lớn' span='3'>
          {taskDetail.departmentCode}
        </Descriptions.Item>
        <Descriptions.Item label='Tên công việc lớn' span='3'>
          {taskDetail.departmentName}
        </Descriptions.Item>
        <Descriptions.Item label='Người kiểm duyệt' span='3'>
          {taskDetail.censor}
        </Descriptions.Item>
        <Descriptions.Item label='Người thực hiện' span='3'>
          {taskDetail.worker}
        </Descriptions.Item>
        <Descriptions.Item label='Trọng số' span='3'>
          {taskDetail.weight}
        </Descriptions.Item>

        <Descriptions.Item label='Mục tiêu cần đạt được' span='3'>
          {taskDetail.name}
        </Descriptions.Item>
        <Descriptions.Item label='Ngày giao' span='1.5'>
          {taskDetail.dateStart}
        </Descriptions.Item>
        <Descriptions.Item label='Deadline' span='1.5'>
          {taskDetail.dateFinish}
        </Descriptions.Item>
        <Descriptions.Item label='Đã hoàn thành' span='3'>
          {taskDetail.status}% công việc
        </Descriptions.Item>
        <Descriptions.Item label='File đính kèm' span='3'>
          <Link to='#' className='attach-file'>
            Task-description.docx
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label='Tiêu chí đánh giá công việc' span='3'>
          {taskDetail.name}
        </Descriptions.Item>
      </Descriptions>

      <Button
        type='primary'
        style={{
          display: 'block',
          float: 'right',
          marginTop: '10px',
          background: ''
        }}
      >
        <Icon type='export' />
        <Link to='/create-report' style={{ color: '#fff', marginLeft: '2px' }}>
          Tạo báo cáo
        </Link>
      </Button>
    </div>
  );
};
export default TaskDetailEmployee;
