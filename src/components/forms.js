//notes for original Form.js


import React from 'react';          // Since the form values are stored in state, they are easily passed down as props or 
                                    // sent upward via a function supplied in props.

//1. set state
class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedDate: []

  }
//4. update State!                      --> 5. onSubmit eListener
  handleFirstNameChange = event => {   // EVENT contains data abt TARGET. (whatev DOM el EVENT was trigged on)
    this.setState({                    // TARGET is the INPUT & has a VALUE ATR which is = whatev is currently
      firstName: event.target.value    // entered into it. this is not the VAL we provided from STATE
    })                                 // updating state based on event.target.value -->causes a re-render. // new state values just set 
                                       // are used to set value attrs of two inputs
  }
                                            // #3 commentary
  handleLastNameChange = event => {         // in RENDER form 2 ANONYMOUS FXs are invoked which accept the
    this.setState({                         // EVENT as an ARG. the EVENT data passed in is auto provided by
      lastName: event.target.value          // the ONCHANGE event listener. these FXs call 2 diff FXs & pass
    })                                      //  EVENT as ARG.             make these FXs... --> 4.
  }

  handleSubmit = event => {                 //5. 
    event.preentDefault();                // current form data using the values stored in state.
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }   //form, when submitted should send form data
    // this.sendFormDataSomewhere(formData)              // somewhere/ might be defined in same form component, but is often provided as a prop.
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> 
      <span>{data.lastName}</span></div>
    })
  }

  //2.render form
  render() { //                                                                       onChange event listener
    return (//          3. to control form, update state via forms. fire setState EVERY TIME FORM CHANGES!!  
      //                                    ..................................................... / 5. set up way to submit form
       <div>
       <form onSubmit={event => this.hadleSubmit(event)}>  
        <input 
          type="text" 
          name="firstName" 
          onChange={event => this.handleFirstNameChange(event)} 
          value={this.state.firstName} 
          />
        <input 
          type="text" 
          name="lastName" 
          onChange={event => this.handleLastNameChange(event)} 
          value={this.state.lastName} 
        />
        <input type="submit"/>
        </form>
      {this.listOfSubmissions()}
      </div>
    )
  } //if change state values, React will re-render & new inputs will display new state.
}

export default Form;

