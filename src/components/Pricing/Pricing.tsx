import React from 'react';
import { connect } from 'react-redux';
import IPrice from '../../common/interfaces/IPrice';
import Price from '../Price/Price';
import './pricing.scss';

interface Props {
    prices: IPrice[];
}
interface State {
    prices: IPrice[];
}

function Pricing({prices} : Props) {
    return (<div className='pricing'>
        <h2 className='pricing__subtitle subtitle'>Pricing</h2>
        <h2 className='pricing__title title'>We have prepared ideal solutions for your business</h2>
        <p className="pricing__text">Small or medium business, or even enterprise: choose your format of work with feedback and NPS!</p>
        <ul className="pricing__list">
            {prices.map((item) => {
                return (
                    <Price key={item.id} type={item.type} perMonth={item.perMonth} perYear={item.perYear} 
                    description={item.description} pros={item.pros} id={item.id}/>
                );
            })}
        </ul>
    </div>);
}

const mapStateToProps = (state: State) => ({
    prices: state.prices,
});

export default connect(mapStateToProps)(Pricing);