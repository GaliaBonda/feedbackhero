import React from 'react';
import AppList from '../AppList/AppList';
import Socials from '../Socials/Socials';
import './footer.scss';


export default function Footer() {
    const quickLinks = ['Features', 'Blog', 'Price'];
    const legalInfo = ['Privacy Policy', 'Cookie', 'Terms of use'];
    const socials = [
        { name: 'twitter', icon: "./assets/et_twitter.svg" },
        { name: 'linkedin', icon: "./assets/et_linkedin.svg" },
        { name: 'facebook', icon: "./assets/et_facebook.svg" },
    ];

    const contacts = [
        '+39 333 3333333',
        'feedbackhero.info@gmail.com',
        <Socials socials={socials} />
    ];

    return (<div className='footer'>
        <img className='footer__img logo-img' src="./assets/Feedback-hero-logo.svg" alt="Feedback Hero Logo" />
        <div className="footer__main">
            <div className="footer__cta">
                <h2 className="footer__title">Your Business Superhero</h2>
                <button className="footer__btn app-contrast-btn">BUY NOW</button>
            </div>
            <div className="footer__links">
                <AppList title='Quick links' list={quickLinks} />
            <AppList title='Legal information' list={legalInfo} />
            <AppList title='Contact' list={contacts} />
            </div>
            
        </div>
    </div>);
}