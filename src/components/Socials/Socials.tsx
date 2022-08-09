import React from 'react';
import ISocial from '../../common/interfaces/ISocial';
import './socials.scss';

interface Props {
    socials: ISocial[];
}

export default function Socials({ socials }: Props) {
    return (<ul className='socials'>
        {socials.map((item, index) => {
            return (<li className='socials__item' key={index}><a href="#" className='socials__link link'>
                <img src={item.icon} alt="" className="socials__item-icon" />
            </a></li>);
        })}
    </ul>);
}