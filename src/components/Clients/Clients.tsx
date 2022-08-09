import React, { useState } from 'react';
import { connect } from 'react-redux';
import ITestimonial from '../../common/interfaces/ITestimonial';
import Companies from '../Companies/Companies';
import Testimonial from '../Testimonial/Testimonial';
import './clients.scss';

interface Props {
    testimonials: ITestimonial[];
}
interface State {
    testimonials: ITestimonial[];
}

function Clients({ testimonials }: Props) {
    const companies = [{
        id: 0,
        name: 'Ferrero',
        logo: './assets/ferrero.svg',
    },
    {
        id: 1,
        name: 'Saras',
        logo: './assets/saras.svg',
    },
    {
        id: 3,
        name: 'PosteItaliane',
        logo: './assets/posteitaliane.svg',
    },
    {
        id: 4,
        name: 'PosteItaliane',
        logo: './assets/posteitaliane.svg',
    },
    {
        id: 3,
        name: 'Leonardo',
        logo: './assets/leonardo.svg',
    },
    {
        id: 4,
        name: 'Ferrero',
        logo: './assets/ferrero.svg',
    }
    ];
    
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const changeComment = (nextComment: boolean) => {
        setCurrentTestimonial((prevVal) => {
            let res;
            if (nextComment) {
                res = prevVal + 1 <= testimonials.length - 1 ? prevVal + 1 : 0;
            } else {
                res = prevVal - 1 >= 0 ? prevVal - 1 : testimonials.length - 1;
            }
            return res;
        });
    }

    return (<div className='clients'>
        <h2 className='clients__subtitle subtitle'>Our clients</h2>
        <h2 className='clients__title title'>We are trusted</h2>
        <Testimonial client={testimonials[currentTestimonial].client} comment={testimonials[currentTestimonial].comment} 
        changeComment={changeComment}/>
        <Companies companies={companies}/>
        
        
    </div>);
}

const mapStateToProps = (state: State) => ({
    testimonials: state.testimonials,
});

export default connect(mapStateToProps)(Clients);