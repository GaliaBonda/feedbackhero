import React from 'react';
import IFeature from '../../common/interfaces/IFeature';
import './feature.scss';

interface Props {
    feature: IFeature;
}

export default function Feature({ feature }: Props) {
    return (<li className="feature__item" >
        <img src={feature.icon} alt="" className="feature__item-icon" />
        <h3 className="feature__item-title">{feature.title}</h3>
        <p className="feature__item-text">{feature.description}</p>
    </li>);
}