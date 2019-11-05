import React from "react";

import "./style.css";

import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";

const DetailTask = () => {
  return (
    <div className="detail-task">
      <DetailLeft />
      <DetailRight />
    </div>
  );
};

export default DetailTask;
