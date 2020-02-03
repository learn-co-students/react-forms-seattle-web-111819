import React, { Component } from 'react';

// A controlled form is a form that DERIVES ITS INPUT VALUES FROM STATE.
// To completely control a form, we also NEED OUR FORM TO UPDATE STATE.
// Controlling forms makes it more convenient to share form values between components. 
// Since the form values are stored in state, they are easily passed down as props or sent upward via a callback() function supplied in props.

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  // In the handleFirstNameChange() and handleLastNameChange() methods, we're updating state based on event.target.value.
  // If we change state values, React will re-render and our inputs will display the new state. 

  // In the case of our first input, that would be a combination of whatever this.state.firstName is equal to plus the last key stroke. 
  // If you pressed 's', event.target.value would equal "Johns".
  handleFirstNameChange = (event) => {
    // setState is what we'll need to initiate a state change
    this.setState({
      firstName: event.target.value
    })
  }

/* 
   The event contains data about the target, which is whatever DOM element the event was triggered on. 
   That target, being an input, has a value attribute. 
   This value attribute is equal to whatever is currently entered into that particular input.
   When we read event.target.value, we get whatever content is present when the event fired. 
*/
  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault() //prevent page refresh after submit
    // copy form data from this.state
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    let dataArray = this.submittedData.concat(formData) //send form data down as props to another component
    this.setState({submittedData: dataArray})
    // console.log(event)
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
      {/* // 2ND EVENT: onSubmit to submit input */}
      <form onSubmit={event => {this.handleSubmit(event)}}>
        {/* 1ST EVENT: onChange={ } will fire every time the form changes */}
        {/* onChange is invoking an anonymous function that accepts event as its argument. */}
        {/* The event data being passed in is automatically provided by the onChange event listener. */}
        <input type="text" name="firstName" onChange={event => this.props.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.props.handleLastNameChange(event)} value={this.state.lastName} />
        <input type="submit" />
      </form>
      {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;