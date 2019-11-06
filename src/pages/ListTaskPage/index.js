import React, { useState, useEffect } from "react";
import ListTask from "../../components/ListTask/index";
import { Row } from "antd";

const initState = [
  {
    title: "Bộ phận sản xuất",
    listTask: ["Sản xuất thuốc bột", "Sản xuất thuốc nước"]
  },
  {
    title: "Bộ phận đảm bảo chất lượng",
    listTask: ["Kiểm tra quy trình sản xuất", "Kiểm tra nguyên liệu đầu vào"]
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
          key={index}
          title={item.title}
          listTask={item.listTask}
          addNewListTask={addNewListTask}
          addNewTask={addNewTask}
        />
      );
    });
    return result;
  };

  return (
    <Row type="flex" gutter={[20, 10]} className="list-task-page">
      {showListAllTask()}
    </Row>
  );
};

export default ListTaskPage;
