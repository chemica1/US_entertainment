import React from 'react';
import FontAwesome from 'react-fontawesome';
import CountTo from 'react-count-to';
import firebase from "firebase";



function fetchDB(uid, DBtitle){
  const fetchedDB = firebase.database().ref('users/' + uid +'/vm-001').child(DBtitle);
  return fetchedDB;
}

export default class HCard extends React.Component {
  constructor(props){
    super(props);
    this.state={
      DBInfo : 0,
      DBtitle : this.props.DBtitle
    };
  }

  componentDidMount(){
    const uid = firebase.auth().currentUser.uid;
    const DBtitle = this.state.DBtitle;
    let fetchedDB = fetchDB(uid, DBtitle);
    fetchedDB.on('value', snap=>{
      this.setState({
        DBInfo : snap.val()
      });
    });
  }


  render() {
    let iconClass = `iconWrapper ${this.props.backgroundColor}`;
    //let DBnumber = this.props.number;
    return(
      <div className='hCard card'>
        <div className={iconClass}>
          <FontAwesome name={this.props.iconName} size='3x' />
        </div>
        <div className='dataWrapper text-light'>
          <p className='number'>{this.props.prefix}<CountTo to={this.state.DBInfo} speed={1000} />{this.props.suffix}</p>
          <p className='label'>{this.props.label}</p>
        </div>
      </div>
    );
  }
}



/*
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

*/