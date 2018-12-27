
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Axios from 'axios';
import restUrl from '../restURL';

const style={
    paperStyle:{
    width: "auto",
    height: "200px",
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    border: "solid 1px #d5d5d5",
    overflowY:"auto"
    }
  }



export default class CreatePost extends React.Component{
state={
  postMessage:""
}

  createPost=()=>{
    let retrievedUserDetails= sessionStorage.getItem('userLoginDetails');
    if(this.state.postMessage==""){
      alert('come on, atleast write good bye!!');
    }else{

var monthName=["Jan", "Feb","March","April","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
var date=new Date();
var latestDate=date.getDate()+"-"+monthName[date.getMonth()]+"-"+date.getFullYear()+" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
let obj={
  _id:Date.now(),
  sender:retrievedUserDetails,
  to: "Shyam",
  message:this.state.postMessage,
  timeStamp:latestDate
}

this.props.createPost(obj);
    }


  }
    render(){
      let retrievedUserDetails= sessionStorage.getItem('userLoginDetails');
        return(
            <div style={style.paperStyle}>
               <Card>
    <CardHeader
      title={"hey " +" "+retrievedUserDetails}
      subtitle="Your Message for Shyam"
      avatar="../../images/userIcon.png"
    />   
    
    <CardText>
    <TextField
      hintText="Share your memories, thought"
      floatingLabelText="At Least Say good bye!!"
      multiLine={true}
      rows={2}
      value={this.state.postMessage}
      onChange = {(event,newValue) => this.setState({postMessage:newValue})}
    />
    
    
    <FloatingActionButton className="pull-right" style={{marginRight:"100px"}} onTouchTap={this.createPost}>
      <ContentAdd />
    </FloatingActionButton>
    </CardText>
  </Card>
                </div>
        )
    }
}