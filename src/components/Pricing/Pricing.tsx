import React from 'react';
import { connect } from 'react-redux';
import IPrice from '../../common/interfaces/IPrice';
import './pricing.scss';

interface Props {
    prices: IPrice[];
}
interface State {
    prices: IPrice[];
}

function Pricing({prices} : Props) {
    return (<div className='pricing'>
        <h2 className='pricing__subtitle'>Pricing</h2>
        <h2 className='pricing__title'>We have prepared ideal solutions for your business</h2>
        <p className="pricing__text">Small or medium business, or even enterprise: choose your format of work with feedback and NPS!</p>
        <ul className="pricing__list">
            {prices.map((item) => {
                return (<li className="pricing__price-item" key={item.id}>
                    <p className="pricing__price-type">{item.type}</p>
                    <div className="pricing__prices">
                        <p className="pricing__price-permonth">{item.perMonth}</p>
                        <p className="pricing__price-peryear">{item.perYear} <span>per year</span></p>
                    </div>
                    <p className="pricing__price-description">{item.description}</p>
                    <ul className="pricing__price-pros">
                        {item.pros.map((pro, index) => {
                            return (
                                <li className="pricing__price-pro" key={index}>{pro}</li>
                            )
                        })}
                    </ul>
                    <button className="pricing__price-choose-btn">Choose this plan</button>
                </li>
                );
            })}
        </ul>
    </div>);
}

const mapStateToProps = (state: State) => ({
    prices: state.prices,
});

export default connect(mapStateToProps)(Pricing);