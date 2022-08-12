import React, { useState } from 'react';
import useWindowDimensions from '../../common/hooks/useWindowDimensions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import Nav from '../Nav/Nav';
import './header.scss';

export default function Header() {
    const [menuShown, setMenuShown] = useState(false);
    const windowDimensions = useWindowDimensions();
    const toggleMenu = (open: boolean) => {
        setMenuShown(open);
    }

    return (<div className='header'>
        <div className="header__inner">
            <img className='header__img logo-img' src="./assets/Feedback-hero-logo.svg" alt="Feedback Hero Logo" />
            {(windowDimensions.width > 768) &&
                <>
                    <Nav />
                    <button className='header__btn register-btn app-btn'>Register</button>
                </>

            }
            {(windowDimensions.width <= 768) && <BurgerMenu openMenu={() => toggleMenu(true)} />}
            {menuShown && <MobileMenu closeMenu={() => toggleMenu(false)} />}
        </div>


    </div>);
}