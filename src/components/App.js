import React, { Component } from "react";
import { QuizBox } from "./QuizBox";
import '../index.scss';

class App extends Component {
  render(){
    return(
      <div className="App">
        {/* Make this a NavBar component so that App.js only contains components */}
        <h1>Hiragana/Katakana Quiz</h1>
        <QuizBox />
      </div>
    )
  }
}

export { App };
