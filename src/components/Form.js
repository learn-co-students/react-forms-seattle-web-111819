import React, { Component } from 'react';

// A controlled form is a form that DERIVES ITS INPUT VALUES FROM STATE.
// To completely control a form, we also NEED OUR FORM TO UPDATE STATE.
// Controlling forms makes it more convenient to share form values between components. 
// Since the form values are stored in state, they are easily passed down as props or sent upward via a callback() function supplied in props.

class Form extends Component {

  render() {
    return (
      <div>
      <form>
        {/* 1ST EVENT: onChange={ } will fire every time the form changes */}
        {/* onChange is invoking an anonymous function that accepts event as its argument. */}
        {/* The event data being passed in is automatically provided by the onChange event listener. */}
        <input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.formData.firstName} />
        <input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName} />
      </form>
      </div>
    )
  }
}

export default Form;