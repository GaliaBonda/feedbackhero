import React from 'react';
import Nav from '../Nav/Nav';
import './header.scss';

export default function Header() {
    return (<div className='header'>
        <img className='header__img logo-img' src="./assets/FeedbackHeroLogo.svg" alt="Feedback Hero Logo" />
        <Nav />
        <button className='header_btn register-btn'>Register</button>
    </div>);
}