import React from 'react';
import IAdvantage from '../../common/interfaces/IAdvantage';
import './advantage.scss';

interface Props {
    advantage: IAdvantage;
}

export default function Advantages({ advantage }: Props) {
    const { icon, title, subtitle, description } = advantage;
    return (
        <li className="advantage">
            <img src={icon} alt="" className="advantage__icon" />
            <h3 className="advantage__title">{title}</h3>
            <h4 className="advantage__subtitle">{subtitle}</h4>
            <p className="advantage__text">{description}</p>
        </li>
    );
}