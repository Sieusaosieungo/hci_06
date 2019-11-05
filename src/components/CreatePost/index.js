import React, { useState, useEffect } from "react";
import "./styles.less";
import { connect } from "react-redux";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "./ClassEditor"; // có thể dùng cái đượ build sẵn để sử dụng

import editorConfiguration from "./configCKEditor";
import { Row, Col, Button, AutoComplete, Input } from "antd";

const { TextArea } = Input;
function CreatePost(props) {
  const [post, setPost] = useState({
    topic: "",
    title: "",
    data: "<p></p>"
  });

  const listTopics = [
    "Giải tích I",
    "Giải tích II",
    "Giải tích III",
    "Đại số",
    "Vật lý đại cương I",
    "Vật lý đại cương II",
    "Vật lý đại cương III",
    "Tin học đại cương",
    "Hóa vô cơ"
  ];

  const onSubmit = () => {
    // axios.post({});
    console.log("post =>", post);
  };

  useEffect(() => {}, [post]);

  return (
    <div className="content">
      <h1>Tạo bài viết</h1>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={4}>
          <strong>
            <h3>Chủ đề:&nbsp;</h3>
          </strong>

          <AutoComplete
            style={{ width: 200 }}
            dataSource={listTopics}
            placeholder="Tên chủ đề ..."
            onChange={topic => setPost({ ...post, topic })}
            filterOption={(inputValue, option) =>
              option.props.children
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            }
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
          <strong>
            <h3>Tiêu đề:&nbsp;</h3>
          </strong>
          <TextArea
            value={post.title}
            onChange={event => setPost({ ...post, title: event.target.value })}
            placeholder="Tên tiêu đề ..."
            autoSize={{ minRows: 1, maxRows: 5 }}
          />
        </Col>
      </Row>
      <br />
      <strong>
        <h3>Nội dung:&nbsp;</h3>
      </strong>
      <CKEditor
        editor={ClassicEditor}
        data={post.data}
        config={editorConfiguration}
        onInit={editor => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          document.getElementById("post").className = "ck-content";
          document.getElementById("post").innerHTML = editor.getData();
          setPost({ ...post, data: editor.getData() });
          console.log("data", post.data);
        }}
        onBlur={(event, editor) => {
          // kích chuột ra ngoài editor, trình soản thảo bị mờ
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          // kích chuột vào editor
          console.log("Focus.", editor);
        }}
      />
      <br />
      <label>
        <h1>Bản xem trước: &nbsp;</h1>
      </label>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div id="post"></div>
        </Col>
      </Row>
      <Button onClick={() => onSubmit()}>Submit</Button>
    </div>
  );
}

export default connect()(CreatePost);
