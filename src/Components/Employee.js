import React, { Component } from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Header from state...",
      content: "Content from state...",
      input1: "",
      output:""
   }
  }
  handleChange=(e)=>
  {
    this.setState({input1: e.target.value})
  }

  onSubmit=()=>
  {
    const telephoneTest = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
    console.log("telephoneTest.test(this.input1)",telephoneTest.test(this.input1))
   console.log("this.input1",this.state.input1)
    if(telephoneTest.test(this.state.input1))
    {
      this.setState({output: "valid"})
    }
    else
    {
      this.setState({output: "not valid"})
    }
  }
  

  render(){
      return (
          <div>
              <input type="text" onChange={(e)=>this.handleChange(e)} name="input1"></input>
              <button type="button" onClick={this.onSubmit}>Button</button>
              <label>This is {this.state.output} </label>
          </div>
      )
  }
}
export default Employee;
