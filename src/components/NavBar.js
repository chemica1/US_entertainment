import React from 'react';
import { NavLink} from 'react-router-dom';

class NavBar extends React.Component { 

  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink className='navbar-brand' to='/'>US Entertainment</NavLink>
          </li>
          <li className='navSection'>
            <NavLink className='navLink' to='/signIn'>로그인</NavLink>
            <NavLink className='navLink' to='/signUp'>가입</NavLink>
          </li>
        </ul>      
      </nav>  
    );
  }
}

export default NavBar;