import React, { Component } from "react";

class ProgressBar extends Component {
  render(){
    return(
      <div className="ProgressBar">
        <h1 style={{ color: "green", fontSize: "22px"}}>Progress Bar:{this.props.numAnswered}/{this.props.total}</h1>
      </div>
    )
  }
}

export { ProgressBar };
