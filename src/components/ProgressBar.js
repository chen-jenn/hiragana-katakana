import React, { Component } from "react";

class ProgressBar extends Component {
  render(){
    let calcWidth = Math.round((this.props.numAnswered/this.props.total)*100)

    return(
      <div className="ProgressBar">
        <div
          className="filler"
          style={{backgroundColor: "#447187", height: "100%", width: `${calcWidth}%`}}>
        </div>
        {/* <h1>Progress Bar:{this.props.numAnswered}/{this.props.total}</h1>
        <h2>Correct: {this.props.correct}</h2>
        <h2>Incorrect: {this.props.incorrect}</h2> */}
      </div>
    )
  }
}

export { ProgressBar };
