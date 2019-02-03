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
      prevChar: "", // to be used in AnswerRevealBox component
      prevCharRomaji: "",
      inputAnswer: ""
    }

    this.saveAnswer = this.saveAnswer.bind(this);
  }

  saveAnswer(answerToSave){
    // Saves user's answer in the state, but also switches out your currentChar by calling the randomChar function
    this.setState({
      currentchar: randomChar(readings),
      prevChar: this.state.currentChar,
      prevCharRomaji: readings[this.state.currentChar],
      inputAnswer: answerToSave
     });
  }

  render(){
    return(
      <main className="QuizBox">
        <div>
          <h1>{this.state.currentChar}</h1>
          <SubmitForm handleSubmit={this.saveAnswer}/>
          <AnswerRevealBox prevChar={this.state.prevChar} prevCharRomaji={this.state.prevCharRomaji}/>
        </div>
        <h5 style={{fontSize: "22px", color: "red"}}>You answered: {this.state.inputAnswer}</h5>
      </main>
    )
  }
}

export { QuizBox };
