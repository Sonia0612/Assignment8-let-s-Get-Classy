import { Component } from "react";
class ProfileClass extends Component{
  constructor(props){
    super(props);
    this.state={
        count:0,count1:1,
        data:{name:'dummy',id:1,avatar_url:"https://avatars.githubusercontent.com/u/86123814?v=4"}
    }
    console.log("Child-Constructor",this.props.name);
  }

   componentDidMount(){
    //using setInterval to identify the drawbacks in SPA
    this.timer=setInterval(()=>console.log("timer"),1000)
    console.log("Child componentDidMount",this.props.name);
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  //make this function async to await something and fetch data
//   async componentDidMount(){
//     //using github api to fetch user details
//     const data=await fetch("https://api.github.com/users/Sonia0612");
//     const json=await data.json();
//     console.log("data",json);
//     this.setState({
//         data:json
//     })
//     console.log("Child componentDidMount",this.props.name);
//   }
  render(){
    console.log("Child-render",this.props.name);
    return(
      <div>
        <h1>hello! I'm a {this.props.name} class Based Component</h1>
        <h2>{this.state.data.name}</h2>
        <h2>{this.state.data.id}</h2>
        <img src={this.state.data.avatar_url}/>
        <button onClick={()=>this.setState({
                        count:1,count1:2
                    })}>CLIck</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
export default ProfileClass
