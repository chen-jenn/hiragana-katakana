import React, { Component } from "react";

// function test(arg){
//   if (Array.isArray(arg) === true){
//     //display with comma in between; append to string
//     return arg.join(", ");
//   } else {
//     return "Argument not an array";
//   }
// }

class AnswerRevealBox extends Component {
  render(){
    return(
      <div className="AnswerRevealBox">
        <h6 style={{ color: "purple", fontSize: "22px"}}>
          {/* Adjust to allow for a list of romaji spellings */}
          From AnswerRevealBox: {this.props.prevChar}
          {Array.isArray(this.props.prevCharRomaji) ? (
            ` - ${this.props.prevCharRomaji.join(", ")}`
          ) : (
            this.props.prevCharRomaji
          )}
        </h6>
      </div>
    )
  }
}

export { AnswerRevealBox };
