import React, { Component } from "react";
import { SubmitForm } from "./SubmitForm";
import { AnswerRevealBox } from "./AnswerRevealBox";
import { ProgressBar } from "./ProgressBar";
import readings from "../data/readings.js";

function randomChar(obj){
  // Makes keys into an array
  const chars = Object.keys(obj);
  let randomIndex = Math.floor(Math.random()*chars.length);
  let random = chars[randomIndex];

  return random;
}

class QuizBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentChar: randomChar(readings), //to be used in QuizBox component
      prevChar: "", // to be used in AnswerRevealBox component
      prevCharRomaji: "",
      inputAnswer: "",
      output: "",
      correct: 0,
      incorrect: 0
    }
    this.saveAnswer = this.saveAnswer.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }


  checkAnswer(answer, input){
    // If more than one reading
    if (Array.isArray(answer)){
      if (answer.includes(input)){
        this.setState({
          correct: this.state.correct + 1,
          output: `<h5>Correct! ${input}</h5>`
         });
      } else {
        this.setState({
          inorrect: this.state.incorrect + 1,
          output: `<h5>Incorrect!</h5>`
         });
      }
      // Only one reading
    } else {
        if (input === answer){
          this.setState({
            correct: this.state.correct + 1,
            output: `<h5>Correct! ${input}</h5>`
           });
        } else {
          this.setState({
            incorrect: this.state.incorrect + 1,
            output: `<h5>Incorrect!</h5>`
           });
        }
    }
  }

  saveAnswer(answerToSave){
    // Saves user's answer in the state, but also switches out your currentChar by calling the randomChar function
    this.setState({
      currentChar: randomChar(readings),
      prevChar: this.state.currentChar,
      prevCharRomaji: readings[this.state.currentChar],
      inputAnswer: answerToSave
    }, () => {
      this.checkAnswer(this.state.prevCharRomaji, this.state.inputAnswer);
    });
  }

  render(){
    return(
      <main className="QuizBox">
          <div className="display">{this.state.currentChar}</div>
          <SubmitForm handleSubmit={this.saveAnswer}/>
          <AnswerRevealBox
            prevChar={this.state.prevChar}
            prevCharRomaji={this.state.prevCharRomaji}
            htmlOutput={this.state.output}
          />
          {/* {(this.state.output === "") ? ("") : (<div dangerouslySetInnerHTML={{__html: this.state.output}} />)} */}
          <ProgressBar
            numAnswered={this.state.correct + this.state.incorrect} total={Object.keys(readings).length}
            correct={this.state.correct}
            incorrect={this.state.incorrect}
          />
      </main>
    )
  }
}

export { QuizBox };
