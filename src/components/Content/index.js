import React from "react";
import "./styles.less";
import Post from "@components/Post/index";

const Content = () => {
  return (
    <div className="content">
      <h2>Danh sách bài viết tiêu biểu</h2>
      <Post></Post>
    </div>
  );
};

export default Content;
