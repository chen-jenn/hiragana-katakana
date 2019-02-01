import React, { Component } from "react";
import { AnswerRevealBox } from "./AnswerRevealBox";
// import { ProgressBar } from "./ProgressBar";
import { SubmitForm } from "./SubmitForm";
import readings from "../data/readings.js";

function randomChar(obj){
  // Makes keys into an array
  let chars = Object.keys(obj)
  let randomIndex = Math.floor(Math.random()*chars.length);
  let random = chars[randomIndex];
  // delete obj[random];
  return random;
}

class QuizBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentChar: randomChar(readings), //to be used in QuizBox component
      prevChar: "" // to be used in AnswerRevealBox component
    }
  }

  render(){
    return(
      <main className="QuizBox">
        <div>
          <h1>{this.state.currentChar}</h1>
          <SubmitForm />
          <AnswerRevealBox char={this.state.prevChar}/>
        </div>
        quizbox text
      </main>
    )
  }
}

export { QuizBox };
