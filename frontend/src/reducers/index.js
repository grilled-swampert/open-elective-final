import { combineReducers } from 'redux';

import terms from './terms';
import semesters from './semesters'; // Uncomment this if you have a separate semesters reducer
import students from './students';

const rootReducer = combineReducers({
    terms, 
    semesters,
    students
});

export default rootReducer;
