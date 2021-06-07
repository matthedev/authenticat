import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import './nav.styles.css';

const NavBar = ({history}) => {
    return <nav className='navBar'>
        <Link className='link'   to='/dashboard'>Users</Link>
        <Link className='link' to='/books'>Books</Link>

        <span
        className='logout' 
        onClick={()=> {
                localStorage.removeItem('token')
                history.push('/')
        }}>Log Out</span>
    </nav>
}

export default withRouter(NavBar);