import React, { useEffect, useState } from 'react';
import Template from "../../components/admin/editAdmin/display/template";
import Sidebar from "../../components/admin/editAdmin/sidebar";
import Header from "../../components/header/Header";
import AddLeftSection from "../../components/admin/editAdmin/display/add-left-section";
import AddRightSection from "../../components/admin/editAdmin/display/add-right-section";
import './AddCourses.css';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSemesters } from '../../actions/terms';

export default function AddCourses() {
    // const [termSemesters, setTermSemesters] = useState([]);
    const { termId } = useParams();

    // useEffect(() => {
    //     const fetchTermSemesters = async () => {
    //         try {
    //             const response = await fetch(`/admin/${termId}/edit`);
    //             console.log(response)
    //             if (!response.ok) {
    //                 console.log(`Failed to fetch semesters: ${response.statusText}`);
    //                 return;
    //             }
    //             const json = await response.json();
    //             console.log("Fetched Data:", json); // Log the entire response
    //             setTermSemesters(json.semesterNumber);
    //         } catch (error) {
    //             console.error(`Error fetching semesters: ${error.message}`);
    //         }
    //     };

    //     fetchTermSemesters();
    // }, [termId]);

    const dispatch = useDispatch();
    const termSemesters = useSelector((state) => state.semesters);
    console.log(termSemesters);

    useEffect(() => {
        dispatch(getSemesters(termId));
    }, [dispatch, termId]);

    console.log(termSemesters);


    return (
        <div>
            <Header />
            <Sidebar />
            <Template />
            <div className='content'>
                <AddLeftSection />
                <div className="ad-right-section">
                    <table id="ad-table">
                        <thead>
                            <tr>
                                <th>SEM</th>
                                <th>OE</th>
                                <th>Category</th>
                                <th>DOWNLOAD</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Certificate Deadline</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        {/* <h1>ytyfhgjkj</h1> */}
                            {termSemesters && termSemesters.map((semester) => (
                                <AddRightSection key={semester._id} semester={semester} />
                            ))}
                        {/* <h1>ugfdghjk</h1> */}
                    </table>
                </div>
            </div>
        </div>
    );
}
