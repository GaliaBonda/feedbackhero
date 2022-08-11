import React from 'react';
import Service from '../Service/Service';
import SignUp from '../SignUp/SignUp';
import './info.scss';

export default function Info() {
    return (
      <div className="info">
        <Service />
        <SignUp />
    </div>  
    );
    

}