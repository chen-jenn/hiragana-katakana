import React, { Component } from "react";

class ProgressCounter extends Component {
  render(){

    return(
      <div className="ProgressCounter">
        <h1>Progress Bar:{this.props.numAnswered}/{this.props.total}</h1>
        <h2>Correct: {this.props.correct}</h2>
        <h2>Incorrect: {this.props.incorrect}</h2>
      </div>
    )
  }
}

export { ProgressCounter };
