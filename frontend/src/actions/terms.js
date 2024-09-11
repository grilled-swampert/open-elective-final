// actions/terms.js
import { 
    FETCH_TERMS, CREATE_TERM, UPDATE_TERM, 
    DELETE_TERM, FETCH_SEMESTERS, CREATE_SEMESTER,
    UPDATE_SEMESTER, DELETE_SEMESTER, FETCH_STUDENTS, UPDATE_STUDENT
} from '../constants/actionTypes';
import * as api from '../api/index.js';
  
// Term Actions
export const getTerms = () => async (dispatch) => {
  try {
      console.log('Sending request to fetch terms');
      const { data } = await api.fetchTerms();
      console.log('Received data:', data);
      dispatch({ type: FETCH_TERMS, payload: data });
  } catch (error) {
      console.error('Error fetching terms:', error.message);
      console.error(error);
  }
}
  
export const createTerm = (term) => async (dispatch) => {
    try {
      const { data } = await api.createTerm(term);
      dispatch({ type: CREATE_TERM, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};
  
export const updateTerm = (id, term) => async (dispatch) => {
    try {
      const { data } = await api.updateTerm(id, term);
      dispatch({ type: UPDATE_TERM, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};
  
export const deleteTerm = (id) => async (dispatch) => {
    try {
      await api.deleteTerm(id);
      dispatch({ type: DELETE_TERM, payload: id });
    } catch (error) {
      console.log(error.message);
    }
};

// Semester Actions
export const getSemesters = (termId) => async (dispatch) => {
    try {
        const { data } = await api.fetchSemesters(termId);
        dispatch({ type: FETCH_SEMESTERS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createSemester = (semester) => async (dispatch) => {
    try {
        const { data } = await api.createSemester(semester);
        dispatch({ type: CREATE_SEMESTER, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateSemester = (termId, semesterId, updatedSemester) => async (dispatch) => {
    try {
        const { data } = await api.updateSemester(termId, semesterId, updatedSemester);
        dispatch({ type: UPDATE_SEMESTER, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteSemester = (termId, semesterId) => async (dispatch) => {
    try {
        await api.deleteSemester(termId, semesterId);
        dispatch({ type: DELETE_SEMESTER, payload: semesterId });
    } catch (error) {
        console.log(error.message);
    }
};

// Student Actions
// actions/terms.js
export const getStudents = (termId, semesterId) => async (dispatch) => {
    console.log('Fetching students for Term ID:', termId); // Debug log for termId

    try {
        const { data } = await api.fetchStudents(termId);
        console.log('Fetched Data:', data); // Debug log for fetched data
        dispatch({ type: FETCH_STUDENTS, payload: data });
    } catch (error) {
        console.error('Error fetching students:', error.message); // Debug log for errors
    }
}

export const updateStudent = (studentId, updatedStudent) => async (dispatch) => {
    try {
        const { data } = await api.updateStudent(studentId, updatedStudent);
        dispatch({ type: UPDATE_STUDENT, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};