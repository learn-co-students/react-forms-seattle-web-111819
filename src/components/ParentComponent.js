import React, { Component } from "react";
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends Component {
  state = {
    firstName: "",
    lastName: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        />
      <DisplayData formData={this.state} />
      </div>
    )
  }
}

export default ParentComponent