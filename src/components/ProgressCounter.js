import React, { Component } from "react";

class ProgressCounter extends Component {
  render(){
    return(
      <div className="ProgressCounter">
        <p>Progress:{this.props.numAnswered}/{this.props.total}<br></br>
          Correct: {this.props.correct}<br></br>
          Incorrect: {this.props.incorrect}
        </p>
      </div>
    )
  }
}

export { ProgressCounter };
