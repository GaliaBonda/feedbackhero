import React from 'react';
import ICompany from '../../common/interfaces/ICompany';
import './company.scss';

export default function Company({logo, name} : ICompany) {

    return (
        <li className="company" >
            <img src={logo} alt={name} className="company__img" />
        </li>);
}