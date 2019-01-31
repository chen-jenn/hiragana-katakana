import React, { Component } from "react";

class AnswerRevealBox extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="AnswerRevealBox">
        <h6>From AnswerRevealBox: {this.props.char}</h6>
      </div>
    )
  }
}

export { AnswerRevealBox };
