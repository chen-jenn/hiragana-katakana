import React, { Component } from "react";

class AnswerRevealBox extends Component {
  render(){
    return(
      <div className="AnswerRevealBox">
        <h6>
          {/* Adjust to allow for a list of romaji spellings */}
          From AnswerRevealBox: {this.props.prevChar}
          {Array.isArray(this.props.prevCharRomaji) ? (
            ` - ${this.props.prevCharRomaji.join(", ")}`
          ) : (
            ` - ${this.props.prevCharRomaji}`
          )}
        </h6>
      </div>
    )
  }
}

export { AnswerRevealBox };
