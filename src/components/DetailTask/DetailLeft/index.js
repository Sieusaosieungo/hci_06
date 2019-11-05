/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";

import "./style.css";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

const DetailLeft = ({ taskName = "Đi học" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(taskName);
  const [description, setDescription] = useState("");
  const [isEditingDes, setIsEditingDes] = useState(false);
  const [stateComment, setStateComment] = useState({
    comments: [
      {
        author: "Phạm Nguyên Hoàng",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: <p>Task này đã hoàn thành</p>,
        datetime: moment().fromNow()
      },
      {
        author: "Trần Văn Trỗi",
        avatar: "https://i.ytimg.com/vi/1roy4o4tqQM/maxresdefault.jpg",
        content: <p>Task này đã được thực hiện bởi tôi</p>,
        datetime: moment().fromNow()
      }
    ],
    submitting: false,
    value: ""
  });

  const onKeyPress = e => {
    if (e.which === 13) {
      setIsEditing(false);
      setIsEditingDes(false);
    }
  };

  const onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };

  const save = e => {
    setDescription(description);
    setIsEditingDes(false);
  };
  const cancel = e => {
    setIsEditingDes(false);
    setIsEditingDes(false);
  };

  const handleSubmit = () => {
    if (!stateComment.value) {
      return;
    }

    setStateComment({
      ...stateComment,
      submitting: true
    });

    setTimeout(() => {
      setStateComment({
        ...stateComment,
        submitting: false,
        value: "",
        comments: [
          {
            author: "Nguyễn Văn Lưu",
            avatar:
              "https://vignette.wikia.nocookie.net/vsbattles/images/3/37/Doraemon_renderImproved.png/revision/latest?cb=20190730170109",
            content: <p>{stateComment.value}</p>,
            datetime: moment().fromNow()
          },
          ...stateComment.comments
        ]
      });
    }, 500);
  };

  const handleChange = e => {
    setStateComment({
      ...stateComment,
      value: e.target.value
    });
  };

  useEffect(() => {
    setTitle(taskName);
  }, [taskName]);

  return (
    <div className="detail-left">
      <div className="header-title">
        <div className="image">
          <img src="../../../images/title-icon-detail.PNG" />
        </div>
        <div className="title">
          {!isEditing && (
            <h2
              className="title-content"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              {title}
            </h2>
          )}
          {isEditing && (
            <textarea
              name="title"
              onChange={onChange}
              value={title}
              autoFocus
              onKeyPress={onKeyPress}
              onBlur={() => setIsEditing(false)}
              placeholder="Input something here"
            ></textarea>
          )}
        </div>
      </div>
      <div className="description">
        <div className="description-title">
          <div className="image">
            <img src="../../../images/description-icon.png" />
          </div>
          <div className="title">
            <h3>Description</h3>
          </div>
        </div>
        <div className="description-content">
          {!isEditingDes && description !== "" && (
            <p onClick={() => setIsEditingDes(true)}>{description}</p>
          )}
          {!isEditingDes && description === "" && (
            <textarea
              onClick={() => setIsEditingDes(true)}
              placeholder="Add a more detailed description..."
            ></textarea>
          )}
          {isEditingDes && (
            <textarea
              name="description"
              onChange={onChange}
              onKeyPress={onKeyPress}
              autoFocus
              value={description}
              onBlur={() => setIsEditingDes(false)}
              onFocus={() => setIsEditingDes(true)}
              placeholder="Add a more detailed description..."
            ></textarea>
          )}
          {isEditingDes && (
            <button onClick={save} id="save">
              Save
            </button>
          )}
          {isEditingDes && (
            <button onClick={cancel} id="cancel">
              Cancel
            </button>
          )}
        </div>
      </div>
      <div className="comment">
        <div className="comment-title">
          <div className="image">
            <img src="../../../images/activities.png" />
          </div>
          <div className="title">
            <h3>Activities</h3>
          </div>
        </div>
        {stateComment.comments.length > 0 && (
          <CommentList comments={stateComment.comments} />
        )}
        <Comment
          avatar={
            <Avatar
              src="https://vignette.wikia.nocookie.net/vsbattles/images/3/37/Doraemon_renderImproved.png/revision/latest?cb=20190730170109"
              alt="Nguyễn Văn Lưu"
            />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={stateComment.submitting}
              value={stateComment.value}
            />
          }
        />
      </div>
    </div>
  );
};

export default DetailLeft;
