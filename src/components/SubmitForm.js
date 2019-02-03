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
    // console.log(`From <SubmitForm/>: ${this.state.inputAnswer}`);
    this.setState({ answerToSave: this.props.handleSubmit(this.state.inputAnswer) })
    this.setState({ inputAnswer: "" });
  }

  render(){
    return (
      <form className="SubmitForm">
        <input type="text" name="answer" value={this.state.inputAnswer} onChange={this.handleFieldChange}></input><br></br>
        <input type="submit" value="Submit" onClick={this.handleSubmitBtn}/>
      </form>
    );
  }
}

export { SubmitForm };
