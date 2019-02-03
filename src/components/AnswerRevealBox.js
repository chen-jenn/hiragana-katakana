import React, { Component } from "react";

class AnswerRevealBox extends Component {
  render(){
    return(
      <div className="AnswerRevealBox">
        <h6 style={{ color: "purple", fontSize: "22px"}}>
          {/* Adjust to allow for a list of romaji spellings */}
          From AnswerRevealBox: {this.props.prevChar} - {this.props.prevCharRomaji}
        </h6>
      </div>
    )
  }
}

export { AnswerRevealBox };
