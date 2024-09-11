import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import AddTerm from './pages/admin/AddTerm';
import ViewAdmin from './pages/admin/ViewAdmin';
import AddCourses from './pages/admin/AddCourses';
import Allocation from './pages/admin/Allocation';
import BroadcastMsg from './pages/admin/BroadcastMsg';

import FacultyLanding from './pages/faculty/fac-landing-page/Faclanding';
import ViewFaculty from './pages/faculty/view/Viewpage';
import AddStudents from './pages/faculty/add student/Studentadd';
import ApproveStudents from './pages/faculty/approval page/Approvalpage';
import ApproveCertificates from './pages/faculty/approve-certificate/Approvecertificate';

import StudentDashboard from "./pages/student/student_dashboard/studentDashboard";
import SelectCoursesPage from "./pages/student/select_courses/selectCourses";
import SomaiyaCourses from "./pages/student/course_list/college_offered/somaiyaCourses";
import CourseraCourses from "./pages/student/course_list/coursera/courseraCourses";
import NptelCourses from "./pages/student/course_list/nptel/nptelCourses";

import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Reset from "./components/login/Reset";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/reset" Component={Reset} />

          <Route path="/" element={<Home />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<AddTerm />} />
          <Route path="/admin/:termId/view" element={<ViewAdmin />} />
          <Route
            path="/admin/:termId/edit/addCourses"
            element={<AddCourses />}
          />
          <Route
            path="/admin/:termId/edit/allocation"
            element={<Allocation />}
          />
          <Route
            path="/admin/:termId/edit/broadcast"
            element={<BroadcastMsg />}
          />

          {/* FACULTY ROUTES */}
          <Route path="/faculty/branch" element={<FacultyLanding />} />
          <Route path="/faculty/branch/:termId/view" element={<ViewFaculty />} />
          <Route
            path="/faculty/branch/:termId/edit/addStudents"
            element={<AddStudents />}
          />
          <Route
            path="/faculty/branch/:termId/edit/approveCourses"
            element={<ApproveStudents />}
          />
          <Route
            path="/faculty/branch/:termId/edit/approveCertificates"
            element={<ApproveCertificates />}
          />

          {/* STUDENT ROUTES */}
          <Route path="/student/66bf1dbb7e8a364c5b73ca72" element={<StudentDashboard />} />
          <Route
            path="/student/66bf1dbb7e8a364c5b73ca72/select-courses"
            element={<SelectCoursesPage />}
          />
          <Route
            path="/student/66bf1dbb7e8a364c5b73ca72/somaiya-courses"
            element={<SomaiyaCourses />}
          />
          <Route
            path="/student/66bf1dbb7e8a364c5b73ca72/coursera-courses"
            element={<CourseraCourses />}
          />
          <Route
            path="/student/66bf1dbb7e8a364c5b73ca72/nptel-courses" 
            element={<NptelCourses />}
          /> 

          {/* EASTER EGG ROUTE */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
