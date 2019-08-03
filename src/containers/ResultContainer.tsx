import React from "react";
import style from "./ResultContainer.module.css";

import { resultObject } from "../Utils";

class ResultContainer extends React.PureComponent<any, any>{
  render() {
    let { notesArr, count } = this.props;
    if (typeof notesArr === "undefined") {
      return (
        <div className={style.result_wrapper}>
          <h5 className={style.header}>You will receive the follwing notes</h5>
          <hr />
        </div>
      );
    } else {
      return (
        <div className={style.result_wrapper}>
          <h5 className={style.header}>You will receive the follwing notes</h5>
          <hr />
          <div className={style.notedetail_wrapper}>
            {notesArr.map((item: resultObject, index: number) => {
              let count = item.count, note = item.note;
              return (<span key={`${index}_note_${note}`} className={style.note_detail}>{count} note(s) of Rs.{note}</span>);

            })}
          </div>
          <hr className={style.thick_line} />
          <div className={style.total_count}>Total Number of Notes: {count}</div>
          <hr className={style.thick_line} />
        </div>
      );
    }
  }
}

export default ResultContainer;