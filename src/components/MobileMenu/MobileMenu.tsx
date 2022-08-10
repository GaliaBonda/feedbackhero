import React from 'react';
import Nav from '../Nav/Nav';
import './mobile-menu.scss';

interface Props {
    closeMenu: () => void;
}

export default function MobileMenu({closeMenu} : Props) {

    return (<div className='mobile-menu'>
        <Nav />
        <button className='mobile-menu__btn register-btn app-btn'>Register</button>
        <button className='mobile-menu__btn close-btn app-btn' onClick={closeMenu}>Close</button>
    </div>);
}