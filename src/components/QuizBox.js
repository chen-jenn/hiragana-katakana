import React, { Component } from "react";
import SubmitForm from "./SubmitForm";
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
      allData: readings
    }
  }

  render(){
    return(
      <main className="QuizBox">
        <div>
          <h1>{randomChar(this.state.allData)}</h1>
          <SubmitForm /> 
        </div>
        quizbox text
      </main>
    )
  }
}

export { QuizBox };
