// reducers/terms.js
import { 
    FETCH_TERMS, CREATE_TERM, UPDATE_TERM,
} from '../constants/actionTypes';
  
// eslint-disable-next-line import/no-anonymous-default-export
export default (terms = [], action) => {
    switch (action.type) {
        case FETCH_TERMS:
            return action.payload;

        case CREATE_TERM:
            return [...terms, action.payload];

        case UPDATE_TERM:
            return terms.map((term) => (term._id === action.payload._id ? action.payload : term));
        
        default:
            return terms;
    }
};
  