import React from "react";
import style from "./NoData.module.css";

const NoData = () => {
  return (
    <div className={style.nodata_wrapper}>
      <h5>Please Enter an Amount</h5>
    </div>
  );
}

export default NoData;