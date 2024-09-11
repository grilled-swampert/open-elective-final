import {
    FETCH_STUDENTS, UPDATE_STUDENT
} from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (students = [], action) => {
    switch (action.type) {
        case FETCH_STUDENTS:
            console.log('FETCH_STUDENTS Action Payload:', action.payload); // Debug log for action payload
            return action.payload;

        case UPDATE_STUDENT:
            console.log('UPDATE_STUDENT Action Payload:', action.payload); // Debug log for action payload
            return students.map((student) => (
                student._id === action.payload._id ? action.payload : student
            ));
        
        default:
            console.log('Default Case, Returning Current Students:', students); // Debug log for default case
            return students;
    }
}
