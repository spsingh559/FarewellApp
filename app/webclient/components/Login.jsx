import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Grid} from 'react-bootstrap';


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:''
    }
   
  }
  
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }
  

  loginClick=()=>{
    if(this.state.username==""){
      alert('do not be in hurry, enter your name!!');
    }else{
    sessionStorage.setItem('userLoginDetails',this.state.username);
    this.context.router.push('/');
    }
    //  let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    
  }
  render() {
  
      return (

        <div className="background">
       <center>
        <TextField
      hintText="your Name"
      floatingLabelText="May i Know your name plz?"
     
      hintStyle={{color:"white"}}
      inputStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      onChange = {(event,newValue) => this.setState({username:newValue})}
    />
    <br />
        <div style={{marginTop:"20px"}}>
        <RaisedButton label="Proceed" primary={true}  onTouchTap={this.loginClick}/>
        </div>
       
        </center>
        </div>
        )
    }
  }