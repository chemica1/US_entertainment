import React from 'react';
import FontAwesome from 'react-fontawesome';
import CountTo from 'react-count-to';
import firebase from "firebase";



function fetchDB(uid, nameOfMachine, DBtitle){
  const fetchedDB = firebase.database().ref('users/' + uid +'/'+ nameOfMachine).child(DBtitle);
  console.log('users/' + uid +'/'+ nameOfMachine)
  console.log(DBtitle)
  return fetchedDB;
}
function fetchNumberOfMachines(uid, DBtitle){
  const fetchedDB = firebase.database().ref('users/' + uid).child(DBtitle);
  return fetchedDB;
}

export default class HCard extends React.Component {
  constructor(props){
    super(props);
    this.state={
      DBInfo : 0,
      DBtitle : this.props.DBtitle,
      nameOfMachine : 10
    };
  }

  componentDidMount(){
    if(this.props.DBtitle === 'numberOfMachines'){
      const uid = firebase.auth().currentUser.uid;
      const DBtitle = this.state.DBtitle;
      let fetchedDB = fetchNumberOfMachines(uid, DBtitle);
      fetchedDB.on('value', snap=>{
        this.setState({
          DBInfo : snap.val()
        });
      });
      
    }else{
    const uid = firebase.auth().currentUser.uid;
    const DBtitle = this.state.DBtitle;
    const nameOfMachine = this.props.nameOfMachine;
    let fetchedDB = fetchDB(uid, nameOfMachine, DBtitle);
    fetchedDB.on('value', snap=>{
      this.setState({
        DBInfo : snap.val()
      });
    });
   }
  }
  
  componentWillReceiveProps(nextProps) {
    // Any time props.email changes, update state.
    if (nextProps.nameOfMachine !== this.props.nameOfMachine) {
      const uid = firebase.auth().currentUser.uid;
      const DBtitle = this.state.DBtitle;
      const nameOfMachine = nextProps.nameOfMachine;
      let fetchedDB = fetchDB(uid, nameOfMachine, DBtitle);
      fetchedDB.on('value', snap=>{
        this.setState({
          DBInfo : snap.val()
        });
      });
      this.setState({
        nameOfMachine: nextProps.nameOfMachine
      });
    }
  }
  render() {
    let iconClass = `iconWrapper ${this.props.backgroundColor}`;
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



/*prefix
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