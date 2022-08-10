import React from 'react';
import Nav from '../Nav/Nav';
import './mobile-menu.scss';

interface Props {
    closeMenu: () => void;
}

export default function MobileMenu({ closeMenu }: Props) {

    return (<div className='mobile-menu'>
        <div className="mobile-menu__inner">
            <Nav />
            <button className='mobile-menu__btn register-btn app-btn'>Register</button>
            <button className='mobile-menu__btn close-btn' onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-1 -1 11 11" version="1.1">
                    <path fill="#5f6368" stroke="#5f6368" stroke-linecap="round" stroke-width="1.5"
                        d="m0 0 9,9 M0 9 9,0" />
                </svg>
            </button>
        </div>

    </div>);
}