import React from 'react';
import './burger-menu.scss';

interface Props {
    openMenu: () => void;
}

export default function BurgerMenu({ openMenu }: Props) {

    return (<div className='burger-menu' onClick={openMenu}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
            width="100px" height="100px" viewBox="0 0 100 100">
            <path stroke-width="12" stroke-linecap="round" stroke="#000" d="M15 20L85 20M15 50L85 50M15 80L85 80" />
        </svg>
    </div>);
}