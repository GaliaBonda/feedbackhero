import React from 'react';
import './nav.scss';

export default function Nav() {
    return (<div className='nav'>
        <ul className="nav__list">
           <li className="nav__list-item">Features</li>
           <li className="nav__list-item">Pricing</li>
           <li className="nav__list-item">Blog</li>
        </ul>
    </div>);
}