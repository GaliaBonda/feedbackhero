import React from 'react';
import ICompany from '../../common/interfaces/ICompany';
import './companies.scss';

interface Props {
    companies: ICompany[];
}

export default function Companies({ companies }: Props) {

    return (<div className='companies'>
        <h2 className="companies__title title">Companies that have already joined us</h2>
        <ul className="companies__list">
            {companies.map((item) => {
                return (<li className="companies__list-item" key={item.id}>
                    <img src={item.logo} alt={item.name} className="companies__img" />
                </li>);
            })}
        </ul>
    </div>);
}