import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


import Comment from 'material-ui/svg-icons/communication/comment';

import Like from 'material-ui/svg-icons/social/mood';
export default class EachPost extends React.Component{

    

    render(){

     
        return(
            <Card style={{marginTop:"10px"}}>
    <CardHeader
      title={this.props.data.sender}
      subtitle={this.props.data.timeStamp}
      avatar="../../images/userIcon.png"
    />
    
    {/* <CardTitle title="Wishes" subtitle="warm wishes" /> */}
    <CardText>
      {this.props.data.message}
    </CardText>
   
  </Card>
        )
    }
}