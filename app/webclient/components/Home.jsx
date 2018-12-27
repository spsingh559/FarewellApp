import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

export default class Home extends React.Component {
  
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
  }
  render() {
  
      return (
        <Grid style={{marginTop:"90px"}}>  
        <center>
            <h2> 
              Let me recollect best Moment, and here we go!!
            </h2>
         </center>
		
           <center>
          <Carousel style={{width:"672px"}}>
  <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/1.jpg" />
    <Carousel.Caption>
      <h3>Ye !! Team Outing</h3>
      <p>Best Memory, Special Parivesh Sir One hand (Tunda) Bowling</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/2.jpg" />
    <Carousel.Caption>
      <h3>Best Official Tour :P :P</h3>
      <p>Adidas Hackathon</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/3.jpg" />
    <Carousel.Caption>
      <h3>Every Lunch comes with Surprise</h3>
      <p>Going to miss lunch time :)</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/4.jpg" />
    <Carousel.Caption>
      <h3>When Campus become Tourist Place</h3>
      <p>Mysore Infy</p>
    </Carousel.Caption>
  </Carousel.Item>
    <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/6.jpg" />
    <Carousel.Caption>
      <h3>First Day at Infy</h3>
      <p>Best Feeling so far :)</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/5.jpg" />
    <Carousel.Caption>
      <h3>When you meet Janu Developer (Java + Node roasted by Spring Boot)</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/11.jpg" />
    <Carousel.Caption>
      <h3>Finally Anguar 8 Contributor ( Jujharu Developer)</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/12.jpg" />
    <Carousel.Caption>
      <h3>Full Time Full Stack Developer</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

 
</Carousel>
         </center>
          </Grid>
      )
    }
  }



