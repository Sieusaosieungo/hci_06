import React, { useState } from "react";
import DetailCheckTask from "../../components/DetailCheckTask/index";
import { Button, Icon } from "antd";

const ProcessCheckPage = () => {
  const [state, setState] = useState({
    newTask: false,
    listTask: []
  });

  const addNewTask = () => {
    setState({
      ...state,
      newTask: true
    });
  };

  const saveNewTask = () => {
    setState({
      ...state,
      newTask: false
    });
  };

  const cancelNewTask = () => {
    setState({
      ...state,
      newTask: false
    });
  };

  const showListTask = () => {
    return (
      <div>
        <Button onClick={() => addNewTask()}>
          <Icon type="plus" />
          <span>Thêm công việc</span>
        </Button>
      </div>
    );
  };

  const showAddTask = () => {
    return (
      <div>
        <DetailCheckTask
          addNewTask={addNewTask}
          saveNewTask={saveNewTask}
          cancelNewTask={cancelNewTask}
          newTask={state.newTask}
        />
      </div>
    );
  };

  return <div>{state.newTask ? showAddTask() : showListTask()}</div>;
};

export default ProcessCheckPage;
