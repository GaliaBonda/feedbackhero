import React from 'react';
import './service.scss';

export default function Service() {
    const serviceInNums = [{
        num: 1000,
        description: 'Reviews every day',
    },
    {
        num: 550,
        description: 'Trades connected',
    },
    {
        num: 240,
        description: 'Companies we serve',
    }];

    return (<div className='service'>
        <div className="container">
            <div className="service__top">
            <h2 className='service__subtitle subtitle'>our service is</h2>
            <div className="service__top-info">
                <h2 className='service__title title'>FeedbackHero in Numbers</h2>
                <p className="service__text">The FeedbackHero is growing right now and getting more and more every day.</p>
                <p className="service__text">Join our service now!</p>
            </div>
        </div>
        <ul className="service__numbers">
            {serviceInNums.map((item, index) => {
                return (
                    <li className="service__numbers-item" key={index}>
                        <p className="service__numbers-num">{item.num}+</p>
                        <p className="service__numbers-desc">{item.description}</p>
                    </li>
                );
            })}
        </ul>
        </div>
        
    </div>);
}