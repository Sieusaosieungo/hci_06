import React from "react";

import "./style.css";

import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";

const DetailTask = ({ taskName }) => {
  {console.log(taskName)}
  return (
    <div className="detail-task">
      
      <DetailLeft taskName={taskName} />
      <DetailRight />
    </div>
  );
};

export default DetailTask;
