import React, { Component } from "react";
import { QuizBox } from "./QuizBox";
// import { AnswerRevealBox } from "./AnswerRevealBox";
// import { SubmitBox } from "./SubmitBox";
// import { ProgressBar } from "./ProgressBar";

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>These words are from App.js</h1>
        <QuizBox />
      </div>
    )
  }
}

export { App };
