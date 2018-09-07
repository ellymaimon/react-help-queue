import React, { Component } from 'react'
import ConfirmationQuestions from './ConfirmationQuestions'
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({formVisibleOnPage: true});
  //   console.log(`formVisibleOnPage is currently set to: ${this.state.formVisibleOnPage}`);
  // }
  
  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    )
  }
}

export default NewTicketControl
