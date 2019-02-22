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
      </div>
    )
  }
}

export { ProgressBar };
