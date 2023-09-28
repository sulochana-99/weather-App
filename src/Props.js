import React, { Component } from 'react'

export class Header extends Component {
    constructor(props){
        super(props);
        this.state = {favouritecolor:"blue"}
    }
    //shouldComponentUpdate(){
        //return false;
    //}
    componentDidMount(){
        setTimeout(()=>{
          this.setState({favouritecolor:"green"})
        },1000)
    }
    //static  getDerivedStaeFromProps(props,state){
       // return {
     //       favouritecolor:props.favcol
        //}
   // }
    //changeColor = ()=>{
        //this.setState({favouritecolor:"yellow"})
   // }
   getSnapshotBeforeUpdate(prevProps,prevState){
    document.getElementById("div1").innerHTML ="before update fav is" +prevState.favouritecolor 
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "the update fav is" +this.state.favouritecolor;
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>My fav color is {this.state.favouritecolor}</h1>
       { /*<button onClick={this.changeColor}><h1>updating the state</h1></button>*/}
       <div id="div1"></div>
       <div id="div2"></div>
        </div>
    )
  }
}

export default Header;