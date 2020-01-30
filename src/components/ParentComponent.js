import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'
 
 
class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
 
//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }
 
//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
 
  render() {
    return (
        <div>
      <Form
        formData={this.state}
        // handleFirstNameChange={this.handleFirstNameChange}
        // handleLastNameChange={this.handleLastNameChange}
        handleChange={this.handleChange}
      />
      <DisplayData formData={this.state} />
      </div>
    )
  }
}
 
export default ParentComponent;