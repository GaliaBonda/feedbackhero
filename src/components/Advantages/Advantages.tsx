import React from 'react';
import { connect } from 'react-redux';
import IAdvantage from '../../common/interfaces/IAdvantage';
import './advantages.scss';

interface Props {
    advantages: IAdvantage[];
}
interface State {
    advantages: IAdvantage[];
}

function Advantages({ advantages }: Props) {
    return (<div className="advantages">
        <h2 className="advantages__subtitle">Why Feedbackhero?</h2>
        <h2 className="advantages__title">Create. Collect. Analyze.Connect BerbackHero today.</h2>
        <p className="advantages__text">
            The FeedbackHero system works for the reputation of your brand. You’ll see your business the way your customers see it.
            Our surveys have already helped solve hundreds of cases, only yours is missing
        </p>
        <ul className="advantages__list">
           {advantages.map((item) => {
            return (
                <li className="advantages__item" key={item.id}>
                    <img src={item.icon} alt="" className="advantages__item-icon" />
                    <h3 className="advantages__item-title">{item.title}</h3>
                    <h4 className="advantages__item-subtitle">{item.subtitle}</h4>
                    <p className="advantages__item-text">{item.description}</p>
                </li>
                );
        })} 
        </ul>
        
    </div>);
}

const mapStateToProps = (state: State) => ({
    advantages: state.advantages,
});

export default connect(mapStateToProps)(Advantages);