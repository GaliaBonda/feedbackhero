import React from 'react';
import IPrice from '../../common/interfaces/IPrice';
import './price.scss';

export default function Price({ type, perMonth, perYear, description, pros }: IPrice) {
    return (
        <li className="price">
            <p className="price__type">{type}</p>
            <div className="price__prices">
                <p className="price__permonth">{perMonth}</p>
                <p className="price__peryear">{perYear} <span>per year</span></p>
            </div>
            <p className="price__description">{description}</p>
            <ul className="price__pros">
                {pros.map((pro, index) => {
                    return (
                        <li className="price__pro" key={index}>{pro}</li>
                    )
                })}
            </ul>
            <button className="price__choose-btn app-btn">Choose this plan</button>
        </li>
    );
}