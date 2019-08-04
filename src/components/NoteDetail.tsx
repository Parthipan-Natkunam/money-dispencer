import React from "react";
import style from "./NoteDetail.module.css";

const NoteDetail = (props: any) => {
  let { note, count } = props.data;
  return (
    <span className={style.note_detail}>{count} note(s) of Rs.{note}</span>
  );
};

export default NoteDetail;