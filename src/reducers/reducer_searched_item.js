export default function(state=null,action){
    switch(action.type){
        case 'LOCATION_SEARCHED':
            return action.payload
    }
    return state
}