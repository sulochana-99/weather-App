import React, { Component } from 'react'

export class Car extends Component {
    constructor(props){
    super(props);
    this.state =  {brand : "kia",model :"kiaw",color:"red"};
    }
    changeColor = () =>{
        this.setState({color:"white"});

}
  render() {
    return (
      <div>
        <h1>Car Details Using State Nad Props</h1>
        <h1>Brand is {this.state.brand}</h1>
        <h1>{this.state.model}</h1>
        <h1>{this.state.color}</h1>
        <button onClick={this.changeColor}>{this.state.color}</button>
      </div>
    )
  }
}

export default Car;