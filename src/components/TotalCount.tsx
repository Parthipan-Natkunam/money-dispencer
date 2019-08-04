import React from "react";
import style from "./TotalCount.module.css";

const TotalCount = (props: any) => {
  return (
    <>
      <hr className={style.thick_line} />
      <div className={style.total_count}>Total Number of Notes: {props.count}</div>
      <hr className={style.thick_line} />
    </>
  );
}

export default TotalCount;