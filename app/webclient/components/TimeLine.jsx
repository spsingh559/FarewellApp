import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

import CreatePost from './Post/CreatePost';
import ShowAllPost from './Post/ShowPost';
import Axios from 'axios';
import restUrl from './restURL';
import Countdown from "react-countdown-now";
import CountDown from 'reactjs-countdown';
// import Chat from './Chat/Chat';

export default class TimeLine extends React.Component{

    state={postData:[]}

    static get contextTypes() {
      return {
        router: React.PropTypes.object.isRequired
      }
    }

componentDidMount=()=>{
  let retrievedUserDetails= sessionStorage.getItem('userLoginDetails');
  if(retrievedUserDetails==""){
   this.context.router.push('/login'); 
  }
    Axios({
        method:'get',
        url:restUrl+'/api/getPostLength'
      })
      .then((data) => {
       console.log(data)
        
        if(data.data.response==0){
          alert('no post available');
        }else{
          this.postMessages(data.data.response);
        }
      
      })
      .catch((error) => {
        console.log(error);
        console.log(error+"error in connecting to server, try again later");
      });
}

postMessages =(postMessageLength)=>{
  for(var i=0; i<postMessageLength; i++){
    Axios({
      method:'get',
      url:restUrl+'/api/getPost/'+i
    })
    .then((data) => {
     console.log(data);
     let obj={
      _id:data.data.response._id,
      sender:data.data.response.sender,
      to: data.data.response.to,
      message:data.data.response.message,
      timeStamp:data.data.response.timeStamp
     }
    let newData =[obj].concat(this.state.postData);
    this.setState({postData:newData});
    })
    .catch((error) => {
      console.log(error);
      console.log(error+"error in connecting to server, try again later");
    });
  }
}

    createPost=(obj)=>{
        let  newData=[obj].concat(this.state.postData);
        this.setState({postData:newData});
        Axios({
            method:'post',
            url:restUrl+'/api/createPost',
            data:obj
          })
          .then((data) => {
           console.log(data)
            
            if(data.data.response=="Success"){
              alert("Tx hash is "+ data.data.txHash);
            }else{
              alert('post Failed');
            }
          
          })
          .catch((error) => {
            console.log(error);
            console.log(error+"error in connecting to server, try again later");
          });
    }
    render(){
        // let timeStart=1545967800000;
        
        
        return(
          
            <Grid style={{marginTop:"60px"}} className="timeline">
            
           <Row>
               <Col xs={2}>
               </Col>
               <Col xs={8}>
                <Row>
                    <CreatePost createPost={this.createPost}/>
                    </Row>
                <Row>
                    <ShowAllPost data={this.state.postData}/>
                </Row>
               </Col>
              

             
              <Col xs={2}>
              <h2 style={{color:"white"}}>
              <CountDown
                    deadline="Fri, 28 Dec 2018 18:30:00"
                />
                <br />
                Countdown
              {/* <Countdown date={Date.now() + 34200000}  /> */}
              </h2>
               </Col>
               </Row>
                </Grid>
               
        )
    }
}