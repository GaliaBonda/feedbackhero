import React from 'react';
import Nav from '../Nav/Nav';
import './header.scss';

export default function Header() {
    return (<div className='header'>
        <img className='header__img logo-img' src="./assets/Feedback-hero-logo.svg" alt="Feedback Hero Logo" />
        <Nav />
        <button className='header__btn register-btn app-btn'>Register</button>
    </div>);
}