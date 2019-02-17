import React, { Component } from "react";
import { QuizBox } from "./QuizBox";
import '../index.scss';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>HIRAGANA/KATAKANA QUIZ</h1>
        <QuizBox />
      </div>
    )
  }
}

export { App };
