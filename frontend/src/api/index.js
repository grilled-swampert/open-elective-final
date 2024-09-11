// api/index.js
import axios from 'axios';

const urlAdmin = 'http://localhost:3000/admin';
const urlFaculty = 'http://localhost:3000/faculty';

// Term API Requests
export const fetchTerms = () => axios.get(urlAdmin);
export const createTerm = (newTerm) => axios.post(urlAdmin, newTerm);
export const updateTerm = (id, updatedTerm) => axios.patch(`${urlAdmin}/${id}`, updatedTerm);
export const deleteTerm = (id) => axios.delete(`${urlAdmin}/${id}`);

// Semester API Requests
export const fetchSemesters = (termId) => axios.get(`/admin/${termId}/view`);
export const deleteSemester = (termId, semesterId) => axios.delete(`/${urlAdmin}/${termId}/edit/${semesterId}`);
export const updateSemester = (termId, semesterId, updatedSemester) => axios.patch(`/${urlAdmin}/${termId}/edit/${semesterId}`, updatedSemester);
export const createSemester = (termId, newSemester) => axios.post(`/${urlAdmin}/${termId}/edit`, newSemester);

// Term API Requests
export const fetchFacultyTerms = () => axios.get(urlFaculty);

// Faculty API Requests
export const fetchFacultySemesters = (termId) => axios.get(`/faculty/${termId}/view`);
export const updateFacultySemester = (termId, semesterId, updatedSemester) => axios.patch(`/${urlFaculty}/${termId}/edit/${semesterId}`, updatedSemester);

// Student API Requests
export const fetchStudents = (termId) => axios.get(`/faculty/branch/${termId}/view`);
export const updateStudent = (termId, studentId, updatedStudent) => axios.patch(`/${urlFaculty}/${termId}/edit/${studentId}`, updatedStudent);