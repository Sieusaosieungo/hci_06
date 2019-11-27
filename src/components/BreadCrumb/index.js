import React, {useState, useEffect} from "react";
import { Breadcrumb } from "antd";
import {useLocation} from "react-router-dom";

function BreadCrumb() {
  let pathname = useLocation().pathname ;
  pathname = pathname === "/" ? "home" : pathname;
  const [current, setCurrent] = useState(pathname);

    useEffect(()=>{
      setCurrent(pathname);
    },[pathname])

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>{current.substring(1,current.length)}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
export default BreadCrumb;
