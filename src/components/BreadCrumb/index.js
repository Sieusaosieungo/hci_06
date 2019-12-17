import React from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BreadCrumb() {
  let pathname = useLocation().pathname;
  let pathTV;
  if (pathname === '/list-task-employee') {
    pathTV = 'Công việc nhân viên';
  } else if (pathname === '/list-task-department') {
    pathTV = 'Công việc phòng ban';
  } else if (pathname === '/manage-report') {
    pathTV = 'Quản lý báo cáo';
  } else if (pathname === '/create-report') {
    pathTV = 'Tạo báo cáo';
  } else if (pathname === '/detail-task') {
    pathTV = 'Chi tiết công việc';
  } else if (pathname === '/report-detail') {
    pathTV = 'Chi tiết báo cáo';
  }
  pathname = pathname === '/' ? '' : pathname;
  // const [current, setCurrent] = useState(pathname);

  // useEffect(() => {
  //   setCurrent(pathname);
  // }, [pathname]);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>
        <Link to='/'>Trang chủ</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={pathname}>{pathTV}</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
export default BreadCrumb;
