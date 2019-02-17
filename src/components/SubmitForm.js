import React from 'react';

class SubmitForm extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      answerToSave: "",
      inputAnswer: "" // Gets sent back to QuizBox
    };

    this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(event){
    const { currentTarget } = event;
    this.setState({ inputAnswer: currentTarget.value })
  }

  handleSubmitBtn(event){
    event.preventDefault();
    // Use this.state.inputAnswer in QuizBox to verify if the answer is correct
    this.setState({ answerToSave: this.props.handleSubmit(this.state.inputAnswer) })
    this.setState({ inputAnswer: "" });
  }

  render(){
    return (
      <form className="SubmitForm">
        <input type="text" name="answer" value={this.state.inputAnswer} onChange={this.handleFieldChange}></input><br></br>
        <input type="submit" value="SUBMIT" onClick={this.handleSubmitBtn}/>
      </form>
    );
  }
}

export { SubmitForm };



// My funfetti. After you install react-dom-confetti lol
// import Confetti from 'react-dom-confetti';
//
// const config = {
//   angle: 90,
//   spread: "162",
//   startVelocity: "50",
//   elementCount: "136",
//   dragFriction: 0.1,
//   duration: "4470",
//   delay: 0,
//   width: "19px",
//   height: "41px",
//   colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
// };
// return <Confetti active={ someProp } config={ config }/>
