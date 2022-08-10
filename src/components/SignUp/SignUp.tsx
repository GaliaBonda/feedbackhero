import React from 'react';
import './signup.scss';

export default function SignUp() {
    return (<div className='sign-up'>
        <h2 className='sign-up__subtitle subtitle'>SIGN UP</h2>
        <div className="sign-up__info">
            <div className="sign-up__main">
                <h2 className='sign-up__title title'>Connect your business to FeedbackHero</h2>
                <p className="sign-up__text">
                    Do you have any questions? Leave a request, our manager will contact you in a few minutes
                    and tell you about all the possibilities of FeedbackHero for your business.
                </p>
                <div className="sign-up__btns">
                    <button className="sign-up__sign-btn">SIGN UP</button>
                    <button className="sign-up__request-btn app-btn">Leave a request</button>
                </div>
            </div>
            <div className="sign-up__media">
                <img src="./assets/sign-up.png" alt="" className="sign-up__img" width="300" height="300" />
            </div>
        </div>

    </div>);
}