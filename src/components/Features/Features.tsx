import React from 'react';
import { connect } from 'react-redux';
import IFeature from '../../common/interfaces/IFeature';
import Feature from '../Feature/Feature';
import './features.scss';

interface Props {
    features: IFeature[];
}
interface State {
    features: IFeature[];
}

function Features({ features }: Props) {
    return (<div className='features'>
        <div className="container">
            <div className="features__top">
                <h2 className='features__subtitle subtitle'>Features</h2>
                <div className="features__top-info">
                    <h2 className='features__title title'>Why FeedbackHero?</h2>
                    <p className="features__text">Return customers with NPS service, feedback and FeedbackHero loyalty assessment.</p>
                </div>
            </div>

            <ul className="features__list">
                {features.map((item) => {
                    return (
                        <Feature key={item.id} feature={item} />
                    );
                })}
            </ul>
        </div>

    </div>);
}

const mapStateToProps = (state: State) => ({
    features: state.features,
});

export default connect(mapStateToProps)(Features);