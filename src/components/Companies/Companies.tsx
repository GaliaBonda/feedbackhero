import React from 'react';
import ICompany from '../../common/interfaces/ICompany';
import Company from '../Company/Company';
import './companies.scss';

interface Props {
    companies: ICompany[];
}

export default function Companies({ companies }: Props) {

    return (<div className='companies'>
        <h2 className="companies__title title">Companies that have already joined us</h2>
        <ul className="companies__list">
            {companies.map((item) => {
                return (<Company key={item.id} logo={item.logo} name={item.name} id={item.id}/>);
            })}
        </ul>
    </div>);
}