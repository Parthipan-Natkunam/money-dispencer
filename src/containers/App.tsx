import React from 'react';
import style from './App.module.css';

import LeftContainer from "../containers/InputContainer";
import RightContainer from "../containers/ResultContainer";

import { calculateNoteDispense, countNotes, resultObject } from "../Utils";

class App extends React.PureComponent<any, any> {
  state = {
    noteCountsArray: void 0,
    noteCount: 0
  };
  calcNoteCounts = (inputRef: any) => (event: any) => {
    event.preventDefault();
    let amount: string | null = !!inputRef.current ? inputRef.current.value : null;
    let noteCountsArray: Array<resultObject> = calculateNoteDispense(amount);
    let noteCount: number = countNotes(noteCountsArray);
    this.setState({
      noteCountsArray,
      noteCount
    });
  };
  render() {
    return (
      <div className={style.app_wrapper} >
        <LeftContainer submitHandler={this.calcNoteCounts} />
        <RightContainer
          notesArr={this.state.noteCountsArray}
          count={this.state.noteCount}
        />
      </div>
    );
  }
}

export default App;
