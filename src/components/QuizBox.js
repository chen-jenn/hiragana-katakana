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

    this.saveAnswer = this.saveAnswer.bind(this);
  }

  saveAnswer(answerToSave){
    this.setState({ prevChar: answerToSave })
  }

  render(){
    return(
      <main className="QuizBox">
        <div>
          <h1>{this.state.currentChar}</h1>
          <SubmitForm handleSubmit={this.saveAnswer}/>
          <AnswerRevealBox char={this.state.prevChar}/>
        </div>
        {console.log(this.state.prevChar)}
        <h5 style={{fontSize: "22px", color: "red"}}>You answered: {this.state.prevChar}</h5>
      </main>
    )
  }
}

export { QuizBox };
