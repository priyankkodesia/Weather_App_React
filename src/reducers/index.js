import { combineReducers } from 'redux';
import WeatherListReducer from './reducer_weather';

const rootReducer = combineReducers({
    weatherList:WeatherListReducer});

export default rootReducer;
