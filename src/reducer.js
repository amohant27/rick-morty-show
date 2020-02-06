
import { FILTER_HEREOS } from './actionsTypes';

const initialState = {
    characters: [],
    filterBy: '',
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FILTER_HEREOS: {
            return {
                ...state, filterBy : action.payload
            }
        }
    }
    return state;
}

export default reducer;