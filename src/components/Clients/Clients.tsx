import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ITestimonial from '../../common/interfaces/ITestimonial';
import Testimonial from '../Testimonial/Testimonial';

interface Props {
    testimonials: ITestimonial[];
}
interface State {
    testimonials: ITestimonial[];
}

function Clients({testimonials} : Props) {
    const [currentTestimonial, setCurrentTestimonial] = useState({client: {
        name: '',
        company: '',
        position: '',
        photo: '',
    },
comment: ''});

    useEffect(() => {
setCurrentTestimonial(testimonials[0]);
    }, [currentTestimonial]);

    return (<div>
        <h2>our clients</h2>
        <Testimonial client={currentTestimonial?.client}/>
    </div>);
}

const mapStateToProps = (state: State) => ({
    testimonials: state.testimonials,
  });

  export default connect(mapStateToProps)(Clients);