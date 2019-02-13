import React from 'react';
import './Header.css';

import { Dropdown, Menu } from 'semantic-ui-react'
import firebase from "firebase";

/*
function fetchDB(uid, DBtitle){
  const fetchedDB = firebase.database().ref('users/' + uid).child(DBtitle);
  return fetchedDB;
}
*/


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options :[]
    }
    
    const uid = firebase.auth().currentUser.uid;
    const fetchedList = firebase.database().ref('users/' + uid +'/vm-list');
    fetchedList.on('value', snap=>{
      const DBobject = snap.val();
      const list = Object.keys(DBobject)
      const newlist = list.map(x=>{return ({text : x})});
      this.setState({
        options: this.state.options.concat(newlist)
      });
    });
  }


  render() {
    return (
      <div className='header' >
        <div className='left'></div>
        <div className='headerTitle'>{this.props.pageTitle}</div>
        <div className='right'>
        <Dropdown
         text='자판기목록'
         options={this.state.options}
         simple item
         className='dropdown'/>
        </div>

      </div>
    );
  }
}

export default Header;


