import React, { Component } from "react";

class AnswerRevealBox extends Component {
  render(){
    return(
      <div className="AnswerRevealBox">
        {(this.props.htmlOutput === "") ? ("") : (<h2 dangerouslySetInnerHTML={{__html: this.props.htmlOutput}} />)}

        <h2>
          {this.props.prevChar}
          {Array.isArray(this.props.prevCharRomaji) ? (
            ` - ${this.props.prevCharRomaji.join(", ")}`
          ) : (
            ` - ${this.props.prevCharRomaji}`
          )}
        </h2>
      </div>
    )
  }
}

export { AnswerRevealBox };
