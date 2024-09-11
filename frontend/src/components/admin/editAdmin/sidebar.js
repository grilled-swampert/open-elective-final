import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <div id="sidebar" style={{ width: isSidebarOpen ? "250px" : "0" }}>
                <Link to ="/admin/:termId/edit/addCourses" ><button className="nav-btn">Add Syllabus</button></Link>
                <Link to ="/admin/:termId/edit/allocation"><button className="nav-btn">Allocation for College Courses</button></Link>
                <Link to = "/admin/:termId/edit/broadcast">
                    <button className="nav-btn">Broadcast Message</button>
                </Link>
            </div>
            <div id="side-nav">
                <span onClick={toggleSidebar}>&#9776;</span>
            </div>
        </div>
    )
}