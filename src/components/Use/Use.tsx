import React from 'react';
import './use.scss';

export default function Use() {
    return (<div className='use'>
        <div className="use__info">
            <h2 className='use__subtitle'>Easy to use</h2>
            <h2 className="use__title">How it works?</h2>
            <div className="use__text">
                <p className="use__subtext">
                    We generate a QR code and a short link.
                    Then you offer it to visitors (leave stickers on the table,
                    print on table awnings, send by e-mail) and get feedback.
                </p>
                <p className="use__subtext">
                    Through a personal account you will be able to collect statistics of the
                    received comments and to do mailing.
                </p>
            </div>
        </div>
        <div className="use__media">
            <img src="./assets/how-to-use.jpg" alt="" className="use__img" width="780" height="500"/>
        </div>
        
    </div>);
}