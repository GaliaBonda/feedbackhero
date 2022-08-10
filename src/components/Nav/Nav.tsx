import React from 'react';
import './nav.scss';

export default function Nav() {
    return (<div className='nav'>
        <ul className="nav__list">
            <li className="nav__list-item"><a href="#" className="nav__link link">Features</a></li>
            <li className="nav__list-item"><a href="#" className="nav__link link">Pricing</a></li>
            <li className="nav__list-item"><a href="#" className="nav__link link">Blog</a></li>
        </ul>
    </div>);
}