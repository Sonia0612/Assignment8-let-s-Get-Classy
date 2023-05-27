// import { Outlet } from 'react-router-dom';
// function About() {
//   return (
//     <div>
//       <h1>About page</h1>
//       <h2><Outlet/></h2>
//     </div>
//   )
// }

//Class based Component:
import { Component } from "react";
import ProfileClass from  "./ProfileClass";

class About extends Component{
  constructor(props){
    super(props);
    console.log("Parent-Constructor");
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  render(){
    console.log("Parent-render");
    return(
      <div>
        <h1>hello! I'm a class Based Component</h1>
        <ProfileClass name={"REACT"}/>
        {/* <ProfileClass name={"REACT2"}/> */}
      </div>
    )
  }
}
export default About
