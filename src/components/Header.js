import React from 'react';
import './Header.css';

import { Dropdown, Menu } from 'semantic-ui-react'


const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]


const DropdownExampleSimple = () => (
    <Dropdown text='자판기목록' options={options} simple item />
)


class Header extends React.Component {
  render() {
    return (
      <div className='header' >
        <div className='left'></div>
        <div className='headerTitle'>{this.props.pageTitle}</div>
        <div className='right'><DropdownExampleSimple className='dropdown'/></div>

      </div>
    );
  }
}

export default Header;


