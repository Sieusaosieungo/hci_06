import React from "react";

import "./style.css";

import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";

const DetailTask = ({ taskName }) => {
  return (
    <div className="detail-task">
      {console.log("TCL: DetailTask -> taskName", taskName)}
      <DetailLeft taskName={taskName} />
      <DetailRight />
    </div>
  );
};

export default DetailTask;
