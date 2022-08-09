import { combineReducers } from 'redux';
import featuresReducer from './modules/features/reducer';
import advantagesReducer from './modules/advantages/reducer';
import testimonialsReducer from './modules/testimonials/reducer';
import pricesReducer from './modules/prices/reducer';

export default combineReducers({
    features: featuresReducer,
    advantages: advantagesReducer,
    testimonials: testimonialsReducer,
    prices: pricesReducer,
});