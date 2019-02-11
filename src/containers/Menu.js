import React from 'react';

import MenuItem from '../components/MenuItem';
import AccountMenu from '../components/AccountMenu'; 

class Menu extends React.Component {

  state = { open: false };

  render()  {
    return (
      <div>
        <div className='brand'>
          <h2 className='title'>관리자 목록</h2>
        </div>
        <ul>
          <MenuItem link='/' linkText='대시보드' iconName='tachometer' />
          <MenuItem link='/orders' linkText='판매현황' iconName='list' />
          <MenuItem link='/profile' linkText='프로필' iconName='tags' />
          <MenuItem link='/settings' linkText='원격제어' iconName='gear' />
        </ul> 
        <div className='logout'>
        <AccountMenu />
        </div>
      </div>
      
    );
  }
}

export default Menu;


/*
<MenuItem link='/customers' linkText='Customers' iconName='group' />
<MenuItem link='/analytics' linkText='Analytics' iconName='bar-chart' />
          <MenuItem link='/shop' linkText='Shop' iconName='shopping-cart' />

          <MenuItem link='/products' linkText='Products' iconName='tags' />
          */