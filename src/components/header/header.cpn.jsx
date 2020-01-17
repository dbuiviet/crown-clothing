import React from 'react';

import './header.style.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/4.2.crown.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options-container'>
            <Link className='option-shop' to='/shop'>SHOP</Link>
            <Link className='option-contact' to='/contact'>CONTACT</Link>
        </div>
    </div>
)


export default Header;