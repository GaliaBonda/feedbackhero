import React, { ReactElement } from 'react';
import './app-list.scss';

interface Props {
    title: string | ReactElement;
    list: string[] | ReactElement[];
}

export default function AppList({ title, list }: Props) {
    return (
        <ul className="app-list">
            <h3 className="app-list__title">{title}</h3>
            {list.map((item, index) => {
                return (
                    <li className="app-list__item" key={index}>{item}</li>
                );
            })}
        </ul>
    );
}