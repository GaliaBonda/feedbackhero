import React, { useEffect, useState } from 'react';
import IMediaContent from '../../common/interfaces/IMediaContent';
import './media.scss';

interface Props {
    content: IMediaContent;
}

export default function Media({ content }: Props) {
    const {directOrder, subtitle, title, text, photo} = content;
    
    const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="media">
            <div className="media__info" style={{ order: !directOrder && (windowDimensions.width > 768) ? '2' : '1' }}>
                <h2 className='media__subtitle subtitle'>{subtitle}</h2>
                <h2 className="media__title title">{title}</h2>
                <div className="media__text">
                    {text.map((item, index) => {
                        return (
                            <p key={index} className="media__subtext">{item}</p>
                        );
                    })}
                </div>
            </div>
            <div className="media__photo" style={{ order: !directOrder && (windowDimensions.width > 768) ? '1' : '2' }}>
                <img src={photo} alt="" className="media__img" />
            </div>
        </div>
    );
}