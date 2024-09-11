import {
    FETCH_SEMESTERS, CREATE_SEMESTER, UPDATE_SEMESTER, DELETE_SEMESTER
} from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (semesters = [], action) => {
    switch (action.type) {
        case FETCH_SEMESTERS:
            return action.payload;

        case CREATE_SEMESTER:
            return [...semesters, action.payload];

        case UPDATE_SEMESTER:
            return semesters.map((semester) => (semester._id === action.payload._id ? action.payload : semester));

        case DELETE_SEMESTER:
            return semesters.filter((semester) => semester._id !== action.payload);

        default:
            return semesters;
    }
};