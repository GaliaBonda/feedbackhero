import { combineReducers } from 'redux';
import featuresReducer from './modules/features/reducer';

export default combineReducers({
    features: featuresReducer,
});