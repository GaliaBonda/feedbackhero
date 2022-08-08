import React from 'react';
import IClient from '../../common/interfaces/IClient';
import './testimonial.scss';

interface Props {
    client: IClient;
   
}

export default function Testimonial({client} : Props) {
    return (<div className="Testimonial">
        Testimonial {client.name} {client.position}
    </div>);
}