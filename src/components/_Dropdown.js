import React, { Component } from 'react'
import { Grid, Dropdown, Form } from 'semantic-ui-react'
import firebase from "firebase";

export default class _Dropdown extends Component {
 constructor(props){
    super(props);
    this.state={
         options :[],
         default: ''
        }
  //DB의 자판기목록 가져옴
  const uid = firebase.auth().currentUser.uid;
  const fetchedList = firebase.database().ref('users/' + uid +'/vm-list');
  fetchedList.on('value', snap=>{
    const DBobject = snap.val();
    const list = Object.keys(DBobject)
    const newlist = list.map(x=>{return ({text : x, value: x})});
    this.setState({
      options: this.state.options.concat(newlist)
    });
  });
}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
    
              <Dropdown
                simple
                name='default'
                options={this.state.options}
                placeholder='자판기목록'
                onChange={this.handleChange}
              />
         
    )
  }
}


/*
   <Grid columns='equal'>
        <Grid.Column>
          <Form>
              <Dropdown
                simple
                name='default'
                options={this.state.options}
                placeholder='자판기목록'
                onChange={this.handleChange}
              />
          </Form>
        </Grid.Column>
        <Grid.Column>
          <pre>{JSON.stringify(this.state.default, null, 2)}</pre>
        </Grid.Column>
      </Grid>
      */