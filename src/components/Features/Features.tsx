import React from 'react';
import { connect } from 'react-redux';
import IFeature from '../../common/interfaces/IFeature';
import './features.scss';

interface Props {
    features: IFeature[];
}
interface State {
    features: IFeature[];
}

function Features({ features } : Props) {
    return (<div className='features'>
        <h2 className='features__subtitle'>Features</h2>
        <h2 className='features__title'>Why FeedbackHero?</h2>
        <p className="features__text">Return customers with NPS service, feedback and FeedbackHero loyalty assessment.</p>
        <ul className="features__list">
            {features.map((item) => {
                    return (<li className="features__item">
                        <img src={item.icon} alt="" className="features__item-icon" />
                        <h3 className="features__item-title">{item.title}</h3>
                        <p className="features__item-text">{item.description}</p>
                    </li>);
                })}
        </ul>
    </div>);
}

const mapStateToProps = (state: State) => ({
    features: state.features,
  });

  export default connect(mapStateToProps)(Features);