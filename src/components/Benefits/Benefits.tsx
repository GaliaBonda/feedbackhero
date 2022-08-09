import React from 'react';
import './benefits.scss';

export default function Benefits() {
    return (<div className='benefits'>
        <div className="benefits__media">
            <img src="./assets/benefits.jpg" alt="" className="use__img" width="780" height="500" />
        </div>
        <div className="benefits__info">
            <h2 className='benefits__subtitle subtitle'>Who’ll benefit?</h2>
            <h2 className="benefits__title title">Fits to any business</h2>
            <p className="benefits__text">
                FeedbackHero is effective in diferrent areas of business: restaurants, hotels,
                E-commerce, Auto service, Auto salons & Lease, Beauty & Cosmetics and other business areas
            </p>
            <button className="benefits__btn">Start using</button>
        </div>
    </div>);
}