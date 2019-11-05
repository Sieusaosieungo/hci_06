import React, { useState, useEffect } from "react";
import ListTask from "../../components/ListTask/index";
import { Row } from "antd";

const initState = [
  {
    title: "Dân IT",
    listTask: ["Code", "Thiết kế"]
  },
  {
    title: "HCI_06",
    listTask: ["Chạy deadline", "Đi học"]
  },
  {
    title: null,
    listTask: []
  }
];

const ListTaskPage = () => {
  const [listAllTask, setListAllTask] = useState(initState);

  useEffect(() => {}, [listAllTask]);

  const addNewListTask = title => {
    let tmp = [...listAllTask];
    tmp[tmp.length - 1] = { title, listTask: [] };
    tmp.push({ title: null, listTask: [] });
    setListAllTask(tmp);
  };

  const addNewTask = (title, newTask) => {
    let tmp = [...listAllTask];
    const index = tmp.findIndex(item => item.title === title);
    tmp[index].listTask.push(newTask);
  };

  const showListAllTask = () => {
    let result = listAllTask.map((item, index) => {
      return (
        <ListTask
          title={item.title}
          listTask={item.listTask}
          key={index}
          addNewListTask={addNewListTask}
          addNewTask={addNewTask}
        />
      );
    });
    return result;
  };

  return (
    <Row gutter={[20, 10]} className="list-task-page">
      {showListAllTask()}
    </Row>
  );
};

export default ListTaskPage;
