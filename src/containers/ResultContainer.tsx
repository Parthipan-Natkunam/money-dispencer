import React from "react";
import style from "./ResultContainer.module.css";

import { resultObject } from "../Utils";

import NoData from "../components/NoData";
import NoteDetail from "../components/NoteDetail";
import TotalCount from "../components/TotalCount";

class ResultContainer extends React.PureComponent<any, any>{
  render() {
    let { notesArr, count } = this.props;
    if (typeof notesArr === "undefined") {
      return <NoData />
    } else {
      return (
        <div className={style.result_wrapper}>
          <h5 className={style.header}>You will receive the follwing notes: </h5>
          <hr />
          <div className={style.notedetail_wrapper}>
            {notesArr.map((item: resultObject, index: number) => {
              if(index%2!==0){
                return (
                  <React.Fragment key={`${index}_fragment_${item.note}`}>
                    <NoteDetail key={`${index}_note_${item.note}`} data={item} />
                    <hr key={`${index}_line_${item.note}`} className={style.soft_innerline}/>
                  </React.Fragment>
                );
              }else{
                return (<NoteDetail key={`${index}_note_${item.note}`} data={item} />);
              }
            })}
          </div>
          <TotalCount count={count} />
        </div>
      );
    }
  }
}

export default ResultContainer;