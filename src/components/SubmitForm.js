import React from 'react';

function SubmitForm(props){
  const {onSubmit = () => {}} = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);

    onSubmit({
      answer: fD.get("body")
    })

    // When the submit button is clicked, the form should reset, and the next character should be displayed.
    // Previous character then be displayed in the AnswerRevealBox component
    currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="SubmitForm">
      <input type="text" name="answer"></input><br></br>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export { SubmitForm };
