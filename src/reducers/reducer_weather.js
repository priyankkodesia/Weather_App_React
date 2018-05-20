import {LOCATION_SEARCHED} from '../actions/index';

export default function(state=[],action){
    switch(action.type){
        case LOCATION_SEARCHED:
        if(action.payload && action.payload.cod =="200"){
            return [action.payload, ...state];
        }
        else{
            alert("Error fetching data")
            return state
        }
    }
    return state
}
