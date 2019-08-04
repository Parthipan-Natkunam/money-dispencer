import React from "react";
import style from "./InputContainer.module.css";

import MoneyForm from "../components/MoneyForm";

class InputContainer extends React.PureComponent<any, any>{
  render() {
    return (
      <div className={style.left_wrapper}>
        <h3 className={style.header}>Money Dispenser ATM</h3>
        <MoneyForm submitHandler={this.props.submitHandler} />
      </div>
    );
  }
}

export default InputContainer;