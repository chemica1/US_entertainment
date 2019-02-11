import React from 'react';
import { Route } from 'react-router-dom';

import _Menu from './Menu';
import Main from './Main';
import Profile from './Profile';
import Products from './Products';
import Shop from './Shop';
import Customers from './Customers';
import Orders from './Orders';
import Analytics from './Analytics';
import Settings from './Settings';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './menuButton.css';




export default class SidebarExampleDimmed extends React.Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div className='fluid-container'>
          <Button disabled={visible} onClick={this.handleShowClick} className='menuButton'>
            ☰
          </Button>
        <div className='row'>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
            className='aside col-md-2 col-sm-3 sidebarMenu'
          >
          <_Menu/>
          </Sidebar>

          <div className='main col-md-12'>       
              <div className='fluid-container'>
              <Route exact path='/' component={Main} />
              <Route path='/profile' component={Profile} />
              <Route path='/orders' component={Orders} />
              <Route path='/settings' component={Settings} />
             </div>
          </div>
        </div>
      </div>
    )
  }
}



/*

              <Route path='/analytics' component={Analytics} />
              
              <Route path='/products' component={Products} />
              <Route path='/shop' component={Shop} />
              <Route path='/customers' component={Customers} />



const Dashboard = () => 
  <div className='fluid-container'>
    <div className='row'>
      <div className='aside col-md-2 col-sm-3 sidebarMenu'>
        <Menu />
      </div>
      <div className='main col-md-10'>       
        <div className='fluid-container'>
          <Route exact path='/' component={Main} />
          <Route path='/profile' component={Profile} />
          <Route path='/products' component={Products} />
          <Route path='/shop' component={Shop} />
          <Route path='/customers' component={Customers} />
          <Route path='/orders' component={Orders} />
          <Route path='/analytics' component={Analytics} />
          <Route path='/settings' component={Settings} />
        </div>
      </div> 
    </div> 
  </div>;

export default Dashboard;
*/