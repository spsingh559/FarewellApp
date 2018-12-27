import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
const style = {
  labelStyle: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
     labelStyle1: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      marginLeft:"-100px",
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
  buttonBorder:{
    width: '167px',
    height: '48px',
    radius: '6px',
    margin: '8px',
    border: 'solid 1px #ffffff',
    color:'#FFFFFF'
  }
} ;
import {
  blue300,
} from 'material-ui/styles/colors';
import { Divider } from 'material-ui';
export default class Nav extends React.Component{
	state={
		openDrawer:false
  };
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

	handleClose = () => this.setState({openDrawer: false});
  handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});
  
  
  dashboardNavigation=()=>{
    this.context.router.push('/timeline');
  }
  
  handleLogout=()=>{
    sessionStorage.removeItem('userLoginDetails');
    this.context.router.push("/login");
  }
	render(){
     let retrievedUserDetails= sessionStorage.getItem('userLoginDetails');
		return(
			<div>
			 <AppBar
             title="eFarewell App"
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             onLeftIconButtonTouchTap={this.handleToggle}
             style={{position: "fixed",top:'0',backgroundColor: '#1f497d'}}
            >
           <FlatButton style={style.labelStyle1} label="Timeline" onTouchTap={this.dashboardNavigation} />
           
           <List>
                <ListItem
                  disabled={true}
                  leftAvatar={<Avatar>{retrievedUserDetails.charAt(0)}</Avatar>}
                >
                </ListItem>
          </List>
           </AppBar>
         
           <Drawer
          docked={false}
          width={200}
          open={this.state.openDrawer}
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
          >

        
          
        <center style={{fontWeight:'bold',fontSize:16, marginTop:"30px"}}>Hello {" " +retrievedUserDetails}
        </center> 

          <MenuItem onTouchTap={this.handleClose}>
           <Link to="/"> Home </Link>
          </MenuItem>
        
          <Divider />
          <MenuItem onTouchTap={this.handleLogout}>
          Logout
          </MenuItem>
        </Drawer>
        </div>
      )
    }
    
	
}