import React from 'react';
import AccountMenu from './AccountMenu'; 

class Header extends React.Component {
  render() {
    return (
      <div className='header' >
        <h1>{this.props.pageTitle}</h1>
      </div>
    );
  }
}

export default Header;