import React, { useRef } from "react";
import style from "./MoneyForm.module.css";

const MoneyForm = (props: any) => {
  const inputRef = useRef(null);
  return (
    <form className={style.money_form} onSubmit={props.submitHandler(inputRef)}>
      <label htmlFor="amount">Enter the Amount</label>
      <input ref={inputRef} type="text" name="amount" pattern="\d*" title="Please enter an integer" />
      <button type="submit">Get Money</button>
    </form>
  );
}

export default MoneyForm;