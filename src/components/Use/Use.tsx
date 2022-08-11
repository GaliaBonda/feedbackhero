import React from 'react';
import Media from '../Media/Media';
import './use.scss';

export default function Use() {
    const easyToUse = {
        directOrder: true,
        title: 'How it works?',
        subtitle: 'Easy to use',
        text: [
            'We generate a QR code and a short link. Then you offer it to visitors (leave stickers on the table, print on table awnings, send by e-mail) and get feedback.',
            'Through a personal account you will be able to collect statistics of the received comments and to do mailing.',
        ],
        photo: "./assets/how-to-use.jpg",
    };
    const whoBenefit = {
        directOrder: false,
        title: 'Fits to any business',
        subtitle: 'Who\'ll benefit?',
        text: [
            'FeedbackHero is effective in diferrent areas of business: restaurants, hotels, E-commerce, Auto service, Auto salons & Lease, Beauty & Cosmetics and other business areas'],
        photo: "./assets/benefits.jpg",
    }

    return (<div className='use'>
        <div className="container">
            <Media content={easyToUse} />
        <Media content={whoBenefit} />
        </div>
    </div>);
}