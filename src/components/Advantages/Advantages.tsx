import React from 'react';
import { connect } from 'react-redux';
import IAdvantage from '../../common/interfaces/IAdvantage';
import Advantage from '../Advantage/Advantage';
import './advantages.scss';

interface Props {
    advantages: IAdvantage[];
}
interface State {
    advantages: IAdvantage[];
}

function Advantages({ advantages }: Props) {
    return (<div className="advantages">
        <div className="container">
            <div className="advantages__top">
            <h2 className="advantages__subtitle subtitle">Why Feedbackhero?</h2>
            <div className="advantages__top-info">
                <h2 className="advantages__title title">Create. Collect. Analyze. Connect BerbackHero today.</h2>
                <p className="advantages__text">
                    The FeedbackHero system works for the reputation of your brand. You’ll see your business the way your customers see it.
                    Our surveys have already helped solve hundreds of cases, only yours is missing
                </p>
            </div>
        </div>

        <ul className="advantages__list">
            {advantages.map((item) => {
                return (
                    <Advantage advantage={item}/>
                    
                );
            })}
        </ul>
        </div>
        

    </div>);
}

const mapStateToProps = (state: State) => ({
    advantages: state.advantages,
});

export default connect(mapStateToProps)(Advantages);