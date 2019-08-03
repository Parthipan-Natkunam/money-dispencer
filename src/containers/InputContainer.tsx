import React from "react";
import style from "./InputContainer.module.css";

class InputContainer extends React.PureComponent<any, any>{
  inputRef: any = React.createRef();
  render() {
    return (
      <div className={style.left_wrapper}>
        <h3 className={style.header}>Money Dispenser ATM</h3>
        <form className={style.money_form} onSubmit={this.props.submitHandler(this.inputRef)}>
          <label htmlFor="amount">Enter the Amount</label>
          <input ref={this.inputRef} type="text" name="amount" pattern="\d*" title="Please enter an integer" />
          <button type="submit">Get Money</button>
        </form>
      </div>
    );
  }
}

export default InputContainer;