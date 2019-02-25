import React, { Component } from "react";
import Confetti from "react-dom-confetti";
import { SubmitForm } from "./SubmitForm";
import { AnswerRevealBox } from "./AnswerRevealBox";
import { ProgressBar } from "./ProgressBar";
import { ProgressCounter } from "./ProgressCounter";
import readings from "../data/readings.js";

// const charKeys = Object.keys(readings).length; //Use this for refactoring later
// How do i NOT use a global variable like this??
let globalUsed = [];

// This can definitely be optimized, you don't want to have to build the array every single time you call this function...
function randomChar(obj){
  // Makes keys into an array
  const chars = Object.keys(obj);
  let randomIndex = Math.floor(Math.random()*chars.length);
  let random = chars[randomIndex];

  if (globalUsed.includes(random)){ //if the character has already been used in the QuizBox display, then pick another random number
    randomIndex = Math.floor(Math.random()*chars.length);
    random = chars[randomIndex]
    return random;
  } else {
    globalUsed.push(random)
    return random;
  }
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
      incorrect: 0,
      isActive: false
    }
    this.saveAnswer = this.saveAnswer.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }


  checkAnswer(answer, input){
    const responses = ["Nope!", "Incorrect!", "Another time", "You can do better than that", "Terrible", "USELESS"]

    // If more than one reading
    if (Array.isArray(answer)){
      if (answer.includes(input)){
        this.setState({
          correct: this.state.correct + 1,
          output: `<h5 id="correct">Correct!</h5>`
         });
      } else {
        this.setState({
          inorrect: this.state.incorrect + 1,
          output: `<h5 id="incorrect">${responses[Math.floor(Math.random()*responses.length)]}</h5>`
         });
      }
      // Only one reading
    } else {
        if (input === answer){
          this.setState({
            correct: this.state.correct + 1,
            output: `<h5 id="correct">Correct!</h5>`
           });
        } else {
          this.setState({
            incorrect: this.state.incorrect + 1,
            output: `<h5 id="incorrect">${responses[Math.floor(Math.random()*responses.length)]}</h5>`
           });
        }
    }

    if (this.state.correct + this.state.incorrect === Object.keys(readings).length-1){
      this.setState({isActive: true})
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
    //Confetti configuration
    const config = {
  		angle: 90,
  		spread: "162",
  		startVelocity: "50",
  		elementCount: "136",
  		dragFriction: 0.1,
  		duration: "4470",
  		delay: 0,
  		width: "19px",
  		height: "41px",
  		colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  	};

    return(
      <main className="QuizBox">
          <div className="display">{this.state.currentChar}</div>
          <SubmitForm handleSubmit={this.saveAnswer}/>
          <AnswerRevealBox
            prevChar={this.state.prevChar}
            prevCharRomaji={this.state.prevCharRomaji}
            htmlOutput={this.state.output}
          />
          <ProgressBar
            numAnswered={this.state.correct + this.state.incorrect}
            total={Object.keys(readings).length}
          />
          <ProgressCounter
            numAnswered={this.state.correct + this.state.incorrect}
            total={Object.keys(readings).length}
            correct={this.state.correct}
            incorrect={this.state.incorrect}
          />
          <Confetti active={this.state.isActive} config={config} />
      </main>
    )
  }
}

export { QuizBox };
