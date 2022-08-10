import React from 'react';
import './main.scss';

export default function Main() {
    return (<div className='main'>
        <div className="main__info">
            <h2 className="main__subtitle subtitle">Your Business Superhero</h2>
            <h1 className="main__title title">Time is money, reviews is a growing business</h1>
            <p className="main__text">The best tool for user satisfaction research, feedback, market research and analytics.</p>
            <button className="main__btn app-btn">TRY NOW</button>
        </div>
        <div className="main__media">
            <img src="./assets/Survey-resault-1.jpg" alt="Survey result example" className="main__img" />
        </div>
    </div>);
}