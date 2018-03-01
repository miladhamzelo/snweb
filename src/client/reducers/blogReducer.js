import { FETCH_ARTICLES } from '../actions';

export default function(state = null, action){
    switch(action.type) {
        case FETCH_ARTICLES:
            return action.payload.data;
        default:
            return state;
    }
}