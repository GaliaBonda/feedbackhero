import React, { useState } from 'react';
import { connect } from 'react-redux';
import ITestimonial from '../../common/interfaces/ITestimonial';
import Testimonial from '../Testimonial/Testimonial';
import './clients.scss';

interface Props {
    testimonials: ITestimonial[];
}
interface State {
    testimonials: ITestimonial[];
}

function Clients({ testimonials }: Props) {
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
        <h2 className='clients__subtitle'>Our clients</h2>
        <h2 className='clients__title'>We are trusted</h2>
        <Testimonial client={testimonials[currentTestimonial].client} comment={testimonials[currentTestimonial].comment} 
        changeComment={changeComment}/>
        
    </div>);
}

const mapStateToProps = (state: State) => ({
    testimonials: state.testimonials,
});

export default connect(mapStateToProps)(Clients);